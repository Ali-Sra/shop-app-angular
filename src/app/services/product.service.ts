import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _products = signal<Product[]>([
    { id: 1, title: 'Laptop', price: 1200, description: '15-inch, 16GB RAM' },
    { id: 2, title: 'Smartphone', price: 800, description: '128GB storage' },
    { id: 3, title: 'Web Camera', price: 60, description: 'Full HD' },
    { id: 4, title: 'Tablet', price: 450, description: '10-inch display' },
  ]);

  products = this._products.asReadonly();

  getById(id: number) {
    return this._products().find(p => p.id === id);
  }
}
