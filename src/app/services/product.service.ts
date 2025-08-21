import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _products = signal<Product[]>([
    { id: 1, title: 'Laptop Pro 15"', price: 1200, description: '16GB RAM, 512GB SSD', category: 'Laptop',   image: 'https://picsum.photos/seed/laptop/400/260' },
    { id: 2, title: 'Smartphone X',    price:  800, description: '128GB storage',        category: 'Phone',    image: 'https://picsum.photos/seed/phone/400/260' },
    { id: 3, title: 'Web Camera HD',   price:   60, description: 'Full HD',              category: 'Accessory',image: 'https://picsum.photos/seed/cam/400/260' },
    { id: 4, title: 'Tablet Mini',     price:  450, description: '10-inch display',      category: 'Tablet',   image: 'https://picsum.photos/seed/tablet/400/260' },
    { id: 5, title: 'Laptop Air 13"',  price:  980, description: '8GB RAM, 256GB SSD',   category: 'Laptop',   image: 'https://picsum.photos/seed/laptop2/400/260' },
    { id: 6, title: 'Noise-cancel Headset', price: 120, description: 'BT 5.3',           category: 'Accessory',image: 'https://picsum.photos/seed/headset/400/260' }
  ]);

  products = this._products.asReadonly();

  getById(id: number) {
    return this._products().find(p => p.id === id);
  }
}
