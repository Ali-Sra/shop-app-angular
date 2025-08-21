import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem { product: Product; quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);
  items = this._items.asReadonly();

  add(product: Product) {
    const found = this._items().find(i => i.product.id === product.id);
    if (found) {
      found.quantity++;
      this._items.update(x => [...x]); // trigger
    } else {
      this._items.update(x => [...x, { product, quantity: 1 }]);
    }
  }

  remove(product: Product) {
    this._items.update(items =>
      items
        .map(i => i.product.id === product.id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  }

  clear() { this._items.set([]); }

  total(): number {
    return this._items().reduce((a, i) => a + i.product.price * i.quantity, 0);
  }

  count(): number {
    return this._items().reduce((a, i) => a + i.quantity, 0);
  }
}
