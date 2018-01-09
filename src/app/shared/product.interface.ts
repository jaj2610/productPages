export interface ProductInterface {
  // Name (required)
  name: string;
  // SKU (alphanumeric, required)
  sku: string;
  // Description (optional)
  description?: string;
  // Brand (optional)
  brand?: string;
  // Image URL (optional)
  image?: string;
}
