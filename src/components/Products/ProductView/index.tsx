import { useParams } from 'react-router-dom';

import useProducts from '../../../hooks/useProducts';
import { ProductType } from '../../../context/ProductsProvider';
import useCart from '../../../hooks/useCart';
import useWishlist from '../../../hooks/useWishlist';

import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { BsCartCheck as CartCheckIcon, BsCartX as RemoveIcon } from 'react-icons/bs';

import Button from '../../Button';
import SimilarProducts from './SimilarProducts';
import ProductDetails from './ProductDetails';

import { numToCurrency } from '../../../functions';

const ProductView = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { sku } = useParams<{ sku: string }>();
  const { products } = useProducts();
  const wishlistContext = useWishlist();

  const cartLineItem = cart.find((item) => item.sku === sku);

  const product: ProductType | undefined = products.find((product) => product.sku === sku);
  const img: string = new URL(`../../../images/${product?.sku}.jpg`, import.meta.url).href;

  const similarProducts: ProductType[] = products
    .filter((product) => product.sku !== sku)
    .slice(0, 3);

  const addItemToCart = () => {
    if (product) {
      const isWishlisted = wishlistContext.wishlist.find((item) => item.sku === product.sku);

      if (isWishlisted) {
        wishlistContext.dispatch({
          type: wishlistContext.WISHLIST_ACTIONS.REMOVE,
          payload: product,
        });
      }

      dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } });
    } else {
      console.error('Product is undefined');
    }
  };

  const removeItemFromCart = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: cartLineItem });
  };

  return (
    <div
      id="product-view"
      className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-9rem)] min-h-[23rem]"
    >
      {product ? (
        <div className="product relative flex flex-col gap-1 items-center max-w-80 sm:max-w-80 mx-auto border-2 border-gray-100 rounded-lg py-4 px-4 sm:px-8">
          <h1 className="text-lg sm:text-2xl sm:text-text-primary">{product.name}</h1>

          <div
            className={`flex sm:hidden items-center ${
              cartLineItem ? 'justify-between' : 'justify-center'
            } gap-2 px-2 w-full`}
          >
            <p className="text-4xl text-text-primary font-medium">{numToCurrency(product.price)}</p>

            {cartLineItem && (
              <div className="text-xs">
                <p>Total:</p>
                <p className="text-text-primary font-semibold">
                  {numToCurrency(cartLineItem.price * cartLineItem.quantity)}
                </p>
              </div>
            )}
          </div>

          <img src={img} alt={product.name} className="w-100" />

          {cartLineItem ? (
            <div className="hidden sm:inline-block group relative -bottom-8 w-min rounded-md overflow-hidden">
              <Button
                buttonRole="tertiary"
                type="button"
                className="absolute sm:inline-flex items-center gap-2 px-6 w-full pointer-events-none rounded-none group-hover:-translate-y-full transition-transform duration-500 delay-300 ease-in-out
                "
              >
                <CartCheckIcon className="text-xl" />
                <span>Added to Cart</span>
              </Button>

              <Button
                buttonRole="tertiary"
                type="button"
                className="sm:inline-flex items-center gap-2 px-6 w-max rounded-none translate-y-full group-hover:-translate-y-0 transition-transform duration-500 delay-300 ease-in-out"
                handleClick={removeItemFromCart}
              >
                <RemoveIcon className="text-xl" />
                <span>Remove from Cart</span>
              </Button>
            </div>
          ) : (
            <Button
              buttonRole="primary"
              type="button"
              className="hidden sm:inline-flex items-center gap-2 relative -bottom-8 px-6 w-max"
              handleClick={addItemToCart}
            >
              <CartIcon className="text-xl" />
              <span>Add to Cart</span>
            </Button>
          )}

          <SimilarProducts
            products={similarProducts}
            productId={product.sku}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />

          <ProductDetails cartLineItem={cartLineItem} product={product} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-text-primary">Product not found</h2>

          <p>Sorry, the product you are looking for is not available.</p>
        </div>
      )}
    </div>
  );
};

export default ProductView;
