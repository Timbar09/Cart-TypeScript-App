import { memo, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductType } from '../../context/ProductsProvider';
import useCart from '../../hooks/useCart';
import useWishlist from '../../hooks/useWishlist';

import { PiHeart as NotInWishlistIcon, PiHeartFill as InWishlistIcon } from 'react-icons/pi';
import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { BsCartCheck as CartCheckIcon } from 'react-icons/bs';
import { HiOutlineArrowLongRight as ChevronRightIcon } from 'react-icons/hi2';

import Button from '../Button';

import { numToCurrency } from '../functions';

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps): ReactElement => {
  const wishlistContext = useWishlist();
  const cartContext = useCart();
  const [liked, setLiked] = useState(false);

  const inCart: boolean = cartContext.cart.some((cartItem) => cartItem.sku === product.sku);

  const img: string = new URL(`../../images/${product.sku}.jpg`, import.meta.url).href;

  const onAddToCart = () => {
    cartContext.dispatch({
      type: cartContext.REDUCER_ACTIONS.ADD,
      payload: { ...product, quantity: 1 },
    });
  };

  const onAddToWishlist = () => {
    wishlistContext.dispatch({ type: wishlistContext.WISHLIST_ACTIONS.ADD, payload: product });

    setLiked(true);

    setTimeout(() => {
      setLiked(false);
    }, 750);
  };

  const onRemoveFromWishlist = () => {
    wishlistContext.dispatch({ type: wishlistContext.WISHLIST_ACTIONS.REMOVE, payload: product });
  };

  const inWishlist: boolean = wishlistContext.wishlist.some((item) => item.sku === product.sku);

  const productPrice = numToCurrency(product.price);

  const content = (
    <li className="relative mb-4 @xs:mb-0 border-2 border-gray-100 rounded-lg overflow-hidden hover:shadow-lg pt-4">
      <header className="absolute top-0 right-0 flex items-center justify-between p-4">
        <span />

        <div className="relative">
          {inWishlist ? (
            <Button
              className="px-2 bg-transparent hover:bg-primary-50 hover:text-primary"
              aria-label="Remove from Wishlist"
              title="Remove from Wishlist"
              handleClick={onRemoveFromWishlist}
            >
              <InWishlistIcon className=" text-lg text-primary" />
            </Button>
          ) : (
            <Button
              className="px-2 bg-transparent hover:bg-primary-50 hover:text-primary"
              aria-label="Add to Wishlist"
              title="Add to Wishlist"
              handleClick={onAddToWishlist}
            >
              <NotInWishlistIcon className=" text-lg" />
            </Button>
          )}

          <div
            className={`heart__animation ${
              liked ? 'block' : 'hidden'
            } absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          />
        </div>
      </header>

      <img src={img} alt={product.name} className="w-100 border-b-2 border-gray-100" />

      <Link
        to={`/products/${product.sku}`}
        className="product__link group flex items-center text-lg font-semibold text-text-primary py-2 px-4"
      >
        <h3 className="">{product.name}</h3>

        <ChevronRightIcon className="product__link--arrow relative text-2xl opacity-0 left-0 group-hover:left-2 group-hover:opacity-100 transition-all duration-300 delay-75" />
      </Link>

      <div className="flex items-center justify-between gap-1 flex-wrap pt-1 px-4 pb-4">
        <p>
          <span className="block text-xs">Price:</span>
          <span className="text-text-primary font-semibold">{productPrice}</span>
        </p>

        {inCart ? (
          <span
            className="text-xs text-primary bg-primary-50 flex items-center gap-1 p-2 rounded-md"
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
            handleClick={onAddToCart}
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
  { product: prevProduct }: ProductProps,
  { product: nextProduct }: ProductProps
) => {
  return Object.keys(prevProduct).every(
    (key) => prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
  );
};

const MemoizedProduct = memo<typeof Product>(Product, arePropsEqual);

export default MemoizedProduct;
