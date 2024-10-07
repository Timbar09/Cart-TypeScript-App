import { memo, ReactElement } from 'react';

import { ProductType } from '../../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../../context/CartProvider';

import { PiHeart as WishlistIcon } from 'react-icons/pi';
import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { BsCartCheck as CartCheckIcon } from 'react-icons/bs';

import Button from '../Button';

type ProductProps = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductProps): ReactElement => {
  const img: string = new URL(`../../images/${product.sku}.jpg`, import.meta.url).href;

  const onAddToCart = () => () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } });

  const productPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const content = (
    <li className="relative mb-4 @xs:mb-0 border-2 border-gray-100 rounded-lg overflow-hidden hover:shadow-lg pt-4">
      <header className="absolute top-0 right-0 flex items-center justify-between p-4">
        <span></span>

        <Button
          className="px-2 bg-transparent hover:bg-primary-50 hover:text-primary"
          aria-label="Add to Wishlist"
          title="Add to Wishlist"
        >
          <WishlistIcon className=" text-lg" />
        </Button>
      </header>

      <img src={img} alt={product.name} className="w-100 border-b-2 border-gray-100" />

      <h3 className="text-lg font-semibold text-text-primary py-2 px-4">{product.name}</h3>

      <div className="flex items-center justify-between gap-1 flex-wrap pt-1 px-4 pb-4">
        <p>
          <span className="block text-xs">Price:</span>
          <span className="text-text-primary font-semibold">{productPrice}</span>
        </p>

        {inCart ? (
          <span
            className="text-xs text-primary bg-primary-100 flex items-center gap-1 p-2 rounded-md"
            aria-label="Added to Cart"
            title="Added to Cart"
          >
            <CartCheckIcon className="text-lg" />
          </span>
        ) : (
          <Button
            buttonRole="primary"
            type="button"
            className="px-2 hover:shadow-md"
            handleClick={onAddToCart()}
            aria-label="Add to Cart"
            title="Add to Cart"
          >
            <CartIcon className="text-lg" />
          </Button>
        )}
      </div>
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
