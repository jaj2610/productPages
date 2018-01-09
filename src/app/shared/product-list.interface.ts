import { Product } from './product';

export interface ProductList {
  [sku: string]: Product;
}
