import { useContext } from 'react';
import ProductsContext from '../context/ProductsProvider';
import { useProductsContextType } from '../context/ProductsProvider';

const useProducts = (): useProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
