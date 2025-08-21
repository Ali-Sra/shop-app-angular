import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  private productService = inject(ProductService);
  cart = inject(CartService);

  q = signal<string>('');
  products = this.productService.products;

  filtered = computed<Product[]>(() => {
    const t = this.q().trim().toLowerCase();
    if (!t) return this.products();
    return this.products().filter(p =>
      p.title.toLowerCase().includes(t) ||
      p.description?.toLowerCase().includes(t) ||
      p.category.toLowerCase().includes(t)
    );
  });
}
