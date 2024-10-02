import { createContext, ReactElement } from 'react';

import { products } from '../../data/products.json';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = products;

export type useProductsContextType = { products: ProductType[] };

const initContextState: useProductsContextType = { products: [] };

const ProductsContext = createContext<useProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <ProductsContext.Provider value={{ products: initState }}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContext;
