import java.sql.*;
import java.util.*;
import org.h2.tools.Server;


public class InventoryBatchApplication {
  public static void main(String[] args) {
    System.out.println("Starting Inventory Update ...");
    try {
      Connection conn = createConnection();
      Collection<Integer> newOrderIds = getNewOrders(conn);
      Map<Integer, Integer> orderedItems = getOrderedLineItems(newOrderIds, conn);
      updateInventory(orderedItems, conn);
      updateOrderStatus(newOrderIds, conn);
      conn.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  private static Connection createConnection() throws SQLException, ClassNotFoundException {
    Class.forName("org.h2.Driver");
    Connection conn = DriverManager.getConnection("jdbc:h2:tcp://localhost:9092/mem:OrderDB", "sa", "");
    return conn;
  }

  private static Collection<Integer> getNewOrders(Connection conn) throws SQLException {
    Collection<Integer> orderIds = new ArrayList<Integer>();
    ResultSet rset = conn.createStatement().executeQuery("select ID from ORDERS where STATUS = 'New'");
    while (rset.next()) {
      orderIds.add(rset.getInt("ID"));
    }
    return orderIds;
  }

  // This method returns a map of two integers. The first Integer is item ID, and
  // the second is cumulative requested quantity across all new orders
  private static Map<Integer, Integer> getOrderedLineItems(Collection<Integer> newOrderIds, Connection conn)  throws SQLException {

    Map<Integer, Integer> orderedLineItems = new HashMap<>();
    Iterator<Integer> it = newOrderIds.iterator();

    while (it.hasNext()) {
      int currentOrder = it.next();
      ResultSet rset = conn.createStatement().executeQuery("SELECT * FROM ITEM WHERE CUSTOMER_ORDER_ID_FK = " + currentOrder);
      while (rset.next()) {
        int id = rset.getInt("ID");
        int quant = rset.getInt("QUANTITY");
        orderedLineItems.put(id, orderedLineItems.getOrDefault(id, 0) + quant);
      }
    }
    return orderedLineItems;
  }

  private static void updateInventory(Map<Integer, Integer> orderedItems, Connection conn) throws SQLException {

    for (int id : orderedItems.keySet()) {
      ResultSet selectResponse = conn.createStatement().executeQuery("SELECT QUANTITY FROM ITEMS WHERE ID = " + id);
      int currentInv = selectResponse.getInt("QUANTITY");
      int requestedInv = orderedItems.get(id);
      if (currentInv >= requestedInv) {
        conn.createStatement().executeQuery("UPDATE ITEMS SET QUANTITY = " + orderedItems.get(id) + " WHERE ID = " + id);
      } else {
        System.out.println("ERROR: Inventory Update Failed. Not enough inventory for requested order!");
        updateIndividualOrderStatus(id, conn, "REJECTED");
        orderedItems.remove(id);
      }
    }
  }

  private static void updateOrderStatus(Collection<Integer> newOrderIds, Connection conn) throws SQLException {
    Iterator<Integer> it = newOrderIds.iterator();

    while (it.hasNext()) {
      int id = it.next();
      updateIndividualOrderStatus(id, conn, "ACCEPTED");
    }
  }

  private static void updateIndividualOrderStatus(int orderId, Connection conn, String status) throws SQLException {
    conn.createStatement().executeQuery("UPDATE ORDERS SET STATUS = " + status + " WHERE ID = " + orderId);
  }
}
