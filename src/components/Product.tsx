import { ReactElement } from 'react';

import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';

type ProductProps = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductProps): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

  console.log(img);

  const onAddToCart = () => () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } });

  const itemInCart = inCart ? '→ Item in cart ✓' : '';

  const content = (
    <li className="max-w-xs">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="w-100" />
      <p>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
          product.price
        )}
      </p>
      {itemInCart}
      <button type="button" onClick={onAddToCart()}>
        Add to cart
      </button>
    </li>
  );

  return content;
};
export default Product;
