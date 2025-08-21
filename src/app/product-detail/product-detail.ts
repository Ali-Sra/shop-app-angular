import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private service = inject(ProductService);

  id = computed(() => Number(this.route.snapshot.paramMap.get('id')));
  product = computed(() => this.service.getById(this.id()));
}
