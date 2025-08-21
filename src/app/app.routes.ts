import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductList, title: 'Products' },
  { path: 'products/:id', component: ProductDetail, title: 'Product Detail' },
  { path: '**', redirectTo: 'products' },
];
