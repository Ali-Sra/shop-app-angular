import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, RouterLink],
})
export class App {
  cart = inject(CartService);

  // reactive counter that updates when cart items change
  itemCount = computed(() =>
    this.cart.items().reduce((sum, i) => sum + i.quantity, 0)
  );
}
