export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: 'Laptop' | 'Phone' | 'Accessory' | 'Tablet';
  image: string;
}
