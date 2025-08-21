import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  // CurrencyPipe را برای استفاده از | currency اضافه کردیم
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  // به‌جای constructor از inject استفاده می‌کنیم تا ترتیب مقداردهی درست باشد
  private productService = inject(ProductService);

  q = signal<string>('');
  products = this.productService.products;

  filtered = computed<Product[]>(() => {
    const term = this.q().trim().toLowerCase();
    if (!term) return this.products();
    return this.products().filter(p =>
      p.title.toLowerCase().includes(term) ||
      (p.description?.toLowerCase().includes(term))
    );
  });
}
