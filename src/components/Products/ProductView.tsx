import { Link, useParams } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';
import { ProductType } from '../../context/ProductsProvider';
import useCart from '../../hooks/useCart';

import { numToCurrency } from '../functions';
import Button from '../Button';
import CartLineItemStepper from '../Cart/CartLineItemStepper';

const ProductView = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { sku } = useParams<{ sku: string }>();
  const { products } = useProducts();

  const cartLineItem = cart.find((item) => item.sku === sku);

  const product: ProductType | undefined = products.find((product) => product.sku === sku);
  const img: string = new URL(`../../images/${product?.sku}.jpg`, import.meta.url).href;

  const similarProducts: ProductType[] = products
    .filter((product) => product.sku !== sku)
    .slice(0, 3);

  const addItemToCart = () => {
    if (product) {
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
        <div className="product relative flex flex-col items-center gap-4 max-w-80 mx-auto border-2 border-gray-100 rounded-lg py-4 px-8">
          <h1 className="text-2xl text-text-primary">{product.name}</h1>
          <img src={img} alt={product.name} className="w-100" />

          <Button
            buttonRole={cartLineItem ? 'tertiary' : 'primary'}
            type="button"
            className="relative -bottom-8 px-6 w-max"
            aria-label={cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
            title={cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
            handleClick={cartLineItem ? removeItemFromCart : addItemToCart}
          >
            {cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
          </Button>

          <div className="left text-center flex flex-col absolute top-[5%] bottom-[5%] right-[100%] border-2 border-gray-100 rounded-s-lg">
            <h3 className="text-sm text-text-primary w-max p-4">Similar Products</h3>

            <ul className="flex flex-col flex-1">
              {similarProducts.map((product, i) => (
                <li key={product.sku} className="flex-1">
                  <Link
                    to={`/products/${product.sku}`}
                    className={`grid place-items-center h-full text-center hover:bg-gray-50 ${
                      i !== products.length - 1 ? 'border-t-2 border-gray-100' : 'rounded-es-lg'
                    }`}
                  >
                    <div className="w-14 mx-auto">
                      <img
                        src={new URL(`../../images/${product.sku}.jpg`, import.meta.url).href}
                        alt={product.name}
                        className="w-100"
                      />
                      <p className="sr-only">{product.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="right flex flex-col gap-6 text-center absolute top-[5%] bottom-[5%] left-[100%] p-4 border-2 border-gray-100 rounded-e-lg">
            <div className="">
              <h3 className="text-sm text-text-primary mb-2">Price</h3>

              <p className="text-4xl text-text-primary font-medium">
                {numToCurrency(product.price)}
              </p>
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
                <CartLineItemStepper
                  item={cartLineItem}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                  size="lg"
                />

                <p className="text-xl text-text-primary font-medium">
                  {numToCurrency(cartLineItem.price * cartLineItem.quantity)}
                </p>
              </div>
            )}
          </div>
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
