import useCart from '../../../hooks/useCart';
import useWishlist from '../../../hooks/useWishlist';
import { CartItemType } from '../../../context/CartProvider';
import { ProductType } from '../../../context/ProductsProvider';

import Button from '../../Button';
import CartLineItemStepper from '../../Cart/CartLineItemStepper';

import { PiHeart as NotInWishlistIcon, PiHeartFill as InWishlistIcon } from 'react-icons/pi';

import { numToCurrency } from '../../../functions';

type ProductDetailsProps = {
  cartLineItem: CartItemType | undefined;
  product: ProductType;
};

const ProductDetails = ({ cartLineItem, product }: ProductDetailsProps) => {
  const { dispatch, REDUCER_ACTIONS } = useCart();
  const wishlistContext = useWishlist();

  const inWishlist: boolean = wishlistContext.wishlist.find((item) => item.sku === product.sku)
    ? true
    : false;

  const onAddToWishlist = () => {
    wishlistContext.dispatch({ type: wishlistContext.WISHLIST_ACTIONS.ADD, payload: product });
  };

  return (
    <div className="right hidden sm:flex flex-col gap-6 text-center absolute top-[5%] bottom-[5%] left-[100%] p-4 border-2 border-gray-100 rounded-e-lg">
      <div className="">
        <h3 className="text-sm text-text-primary mb-2">Price</h3>

        <p className="text-4xl text-text-primary font-medium">{numToCurrency(product.price)}</p>
      </div>

      <Button
        buttonRole={inWishlist ? 'tertiary' : 'secondary'}
        type="button"
        className={`inline-flex items-center gap-2 p-2 w-full ${
          inWishlist ? 'pointer-events-none' : ''
        }`}
        handleClick={inWishlist ? () => {} : onAddToWishlist}
      >
        {inWishlist ? (
          <>
            <InWishlistIcon className="text-xl" />
            <span>Wishlisted</span>
          </>
        ) : (
          <>
            <NotInWishlistIcon className="text-xl" />
            <span>Wishlist</span>
          </>
        )}
      </Button>

      {cartLineItem && (
        <div className="flex flex-col gap-4 items-center">
          <div>
            <h3 className="text-sm text-text-primary mb-2">Quantity</h3>

            <CartLineItemStepper
              item={cartLineItem}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              size="lg"
            />
          </div>

          <div>
            <h3 className="text-sm text-text-primary mb-1">Total</h3>

            <p className="text-xl text-text-primary font-medium">
              {numToCurrency(cartLineItem.price * cartLineItem.quantity)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
