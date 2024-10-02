import { ReactElement } from 'react';

import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

import Product from './Product';

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let content: ReactElement | ReactElement[] = <div>Loading...</div>;

  if (products?.length) {
    content = products.map((product) => {
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

  return (
    <>
      <h1 className="offscreen">Products</h1>

      <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-[10%] lg:mx-0">{content}</ul>
    </>
  );
};

export default ProductList;
