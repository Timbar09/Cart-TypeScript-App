import { createContext, ReactElement, useState, useEffect } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [];

export type useProductsContextType = { products: ProductType[] };

const initContextState: useProductsContextType = { products: [] };

const ProductsContext = createContext<useProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const response = await fetch('https://localhost:3500/products');
      const data = await response.json().catch((error) => {
        if (error instanceof Error) {
          console.error('Error:', error.message);
        }
      });

      return data;
    };

    fetchProducts().then((data) => setProducts(data));
  }, []);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
