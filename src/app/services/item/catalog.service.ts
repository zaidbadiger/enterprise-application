import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/Item';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor() { }

  getItemById(id: number): Item{
    return this.getAll().find(item => item.id == id)!;
  }

  getAll(): Item[] {
    return [
      {
        id: 1,
        name: 'Red Striped T-Shirt',
        price: 30,
        imageUrl: '/assets/stripe-t-shirt.png',
        quantity: 0,
      },
      {
        id: 2,
        name: 'Loose Working Pants',
        price: 50,
        imageUrl: '/assets/working-pants.png',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Jordan 1 Retro High',
        price: 180,
        imageUrl: '/assets/jordan-1-retro.png',
        quantity: 0,
      },
      {
        id: 4,
        name: 'Slouchy Crew Socks',
        price: 15,
        imageUrl: '/assets/ugg-crew-socks.png',
        quantity: 0,
      },
      {
        id: 5,
        name: 'Ducks Unlimited Hat',
        price: 25,
        imageUrl: '/assets/ducks-unlimited-hat.png',
        quantity: 0,
      },
      {
        id: 6,
        name: 'Fossil Gold Watch',
        price: 120,
        imageUrl: '/assets/fossil-gold-watch.png',
        quantity: 0,
      },
    ];
  }
}
