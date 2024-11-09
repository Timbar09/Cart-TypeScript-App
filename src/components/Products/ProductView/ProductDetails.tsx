import useCart from '../../../hooks/useCart';

import { CartItemType } from '../../../context/CartProvider';
import { ProductType } from '../../../context/ProductsProvider';

import Button from '../../Button';
import CartLineItemStepper from '../../Cart/CartLineItemStepper';

import { numToCurrency } from '../../functions';

type ProductDetailsProps = {
  cartLineItem: CartItemType | undefined;
  product: ProductType;
};

const ProductDetails = ({ cartLineItem, product }: ProductDetailsProps) => {
  const { dispatch, REDUCER_ACTIONS } = useCart();

  return (
    <div className="right hidden sm:flex flex-col gap-6 text-center absolute top-[5%] bottom-[5%] left-[100%] p-4 border-2 border-gray-100 rounded-e-lg">
      <div className="">
        <h3 className="text-sm text-text-primary mb-2">Price</h3>

        <p className="text-4xl text-text-primary font-medium">{numToCurrency(product.price)}</p>
      </div>

      <Button
        buttonRole="secondary"
        type="button"
        className="p-2 w-max"
        aria-label="Add to Cart"
        title="Add to wishlist"
      >
        Add to Wishlist
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
