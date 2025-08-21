import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList, title: 'Products' },
  { path: 'products/:id', component: ProductDetail, title: 'Product Detail' },
  { path: 'cart', component: Cart, title: 'Cart' },
  { path: '**', redirectTo: 'products' }
];
