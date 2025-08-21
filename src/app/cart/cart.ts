import { Component, inject } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, NgFor, NgIf],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cart = inject(CartService);
}
