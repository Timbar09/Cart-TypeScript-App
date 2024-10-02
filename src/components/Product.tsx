import { memo, ReactElement } from 'react';

import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';

import Button from './Button';

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
    <li className="max-w-sm sm:max-w-max mx-auto mb-4 border border-gray-100 rounded overflow-hidden shadow-lg p-4">
      <h3 className="text-lg font-semibold text-text-primary">{product.name}</h3>

      <img src={img} alt={product.name} className="w-100" />

      <p>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
          product.price
        )}
      </p>

      {itemInCart}
      <Button handleClick={onAddToCart()}>Add to cart</Button>
    </li>
  );

  return content;
};

const arePropsEqual = (
  { product: prevProduct, inCart: prevInCart }: ProductProps,
  { product: nextProduct, inCart: nextInCart }: ProductProps
) => {
  return (
    Object.keys(prevProduct).every(
      (key) => prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
    ) && prevInCart === nextInCart
  );
};

const MemoizedProduct = memo<typeof Product>(Product, arePropsEqual);

export default MemoizedProduct;
