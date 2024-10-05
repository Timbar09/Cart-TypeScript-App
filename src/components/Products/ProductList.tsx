import { ReactElement } from 'react';

import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

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
    <div className="@container">
      <header className=" py-4">
        <h2 className="text-3xl font-medium text-text-primary">Products</h2>
      </header>

      <ul className="@xs:grid @xs:grid-cols-2 @xl:grid-cols-3 gap-4">{content}</ul>
    </div>
  );
};

export default ProductList;
