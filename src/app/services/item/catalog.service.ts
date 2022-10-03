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
      },
      {
        id: 2,
        name: 'Loose Working Pants',
        price: 50,
        imageUrl: '/assets/working-pants.png',
      },
      {
        id: 3,
        name: 'Jordan 1 Retro High',
        price: 180,
        imageUrl: '/assets/jordan-1-retro.png',
      },
      {
        id: 4,
        name: 'Slouchy Crew Socks',
        price: 15,
        imageUrl: '/assets/ugg-crew-socks.png',
      },
      {
        id: 5,
        name: 'Ducks Unlimited Hat',
        price: 25,
        imageUrl: '/assets/ducks-unlimited-hat.png',
      },
      {
        id: 6,
        name: 'Fossil Gold Watch',
        price: 120,
        imageUrl: '/assets/fossil-gold-watch.png',
      },
    ];
  }
}
