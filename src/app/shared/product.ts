import { ProductInterface } from './product.interface';

export class Product implements ProductInterface {
  constructor(public name: string, public sku: string) {
    
  }
}
