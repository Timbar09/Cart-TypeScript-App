const numToCurrency = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};

const getProductImage = (sku: string): string => {
  return new URL(`./assets/images/products/${sku}.png`, import.meta.url).href;
};

export { numToCurrency, getProductImage };
