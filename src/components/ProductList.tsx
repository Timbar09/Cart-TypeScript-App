import { ReactElement } from 'react';

import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

import Product from './Product';

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let componentContent: ReactElement | ReactElement[] = <div>Loading...</div>;

  if (products?.length) {
    componentContent = products.map((product) => {
      const inCart: boolean = cart.some((cartItem) => cartItem.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  return <ul>{componentContent}</ul>;
};

export default ProductList;
