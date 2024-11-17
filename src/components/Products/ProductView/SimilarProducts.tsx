import { Link } from 'react-router-dom';

import { ProductType } from '../../../context/ProductsProvider';
import useCart from '../../../hooks/useCart';

import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { BsCartX as RemoveIcon } from 'react-icons/bs';
import { PiHeart as WishlistIcon } from 'react-icons/pi';

import Button from '../../Button';

import CartLineItemStepper from '../../Cart/CartLineItemStepper';

import { getProductImage } from '../../../functions';

type SimilarProductsProps = {
  productId: string;
  products: ProductType[];
  addItemToCart: () => void;
  removeItemFromCart: () => void;
};

const SimilarProducts = ({
  products,
  productId,
  addItemToCart,
  removeItemFromCart,
}: SimilarProductsProps) => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  const cartLineItem = cart.find((item) => item.sku === productId);

  return (
    <div className="left relative w-full sm:w-auto text-center flex flex-col sm:absolute sm:top-[5%] sm:bottom-[5%] sm:right-[100%] border-2 border-gray-100 rounded-s-lg rounded-e-lg sm:rounded-e-none">
      <h3 className="text-sm text-text-primary sm:w-max px-4 pt-6 sm:pt-4 pb-2 sm:pb-4">
        Similar Products
      </h3>

      <div className="sm:hidden absolute left-6 -top-5 right-6 flex items-center justify-between">
        <Button
          buttonRole={cartLineItem ? 'tertiary' : 'primary'}
          type="button"
          className="px-2"
          handleClick={cartLineItem ? removeItemFromCart : addItemToCart}
          title={cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
          ariaLabel={cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
        >
          {cartLineItem ? <RemoveIcon className=" text-lg" /> : <CartIcon className=" text-lg" />}
        </Button>

        {cartLineItem && (
          <div className="p-2 rounded-md bg-gray-100">
            <CartLineItemStepper
              item={cartLineItem}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          </div>
        )}

        <Button
          buttonRole="primary"
          type="button"
          className="px-2"
          ariaLabel="Add to Wishlist"
          title="Add to Wishlist"
        >
          <WishlistIcon className=" text-lg" />
        </Button>
      </div>

      <ul className="flex sm:flex-col flex-1 border-t-2 sm:border-t-0 border-gray-100">
        {products.map((product, i) => {
          const img = getProductImage(product.sku);

          return (
            <li key={product.sku} className="flex-1">
              <Link
                to={`/products/${product.sku}`}
                className={`grid place-items-center h-full text-center hover:bg-gray-50 sm:border-t-2 border-gray-100 ${
                  i !== products.length - 1 ? '' : 'rounded-es-lg'
                }`}
              >
                <div className="w-14 mx-auto p-2">
                  <img src={img} alt={product.name} className="w-100" />
                  <p className="sr-only">{product.name}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SimilarProducts;
