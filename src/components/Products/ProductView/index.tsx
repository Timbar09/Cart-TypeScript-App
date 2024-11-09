import { useParams } from 'react-router-dom';

import useProducts from '../../../hooks/useProducts';
import { ProductType } from '../../../context/ProductsProvider';
import useCart from '../../../hooks/useCart';

import Button from '../../Button';
import SimilarProducts from './SimilarProducts';
import ProductDetails from './ProductDetails';

import { numToCurrency } from '../../functions';

const ProductView = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { sku } = useParams<{ sku: string }>();
  const { products } = useProducts();

  const cartLineItem = cart.find((item) => item.sku === sku);

  const product: ProductType | undefined = products.find((product) => product.sku === sku);
  const img: string = new URL(`../../../images/${product?.sku}.jpg`, import.meta.url).href;

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

          <Button
            buttonRole={cartLineItem ? 'tertiary' : 'primary'}
            type="button"
            className="hidden sm:inline-block relative -bottom-8 px-6 w-max"
            handleClick={cartLineItem ? removeItemFromCart : addItemToCart}
          >
            {cartLineItem ? 'Remove from Cart' : 'Add to Cart'}
          </Button>

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
