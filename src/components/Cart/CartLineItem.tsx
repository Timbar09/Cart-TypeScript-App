import { memo } from 'react';
import { Link } from 'react-router-dom';

import { CartItemType } from '../../context/CartProvider';
import { ReducerAction, ReducerActionType } from '../../context/CartProvider';

import { IoClose as RemoveIcon } from 'react-icons/io5';

import CartLineItemStepper from './CartLineItemStepper';

import { numToCurrency, getProductImage } from '../../functions';

type CartLineItemProps = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: CartLineItemProps): JSX.Element => {
  const img = getProductImage(item.sku);

  const productPrice: string = numToCurrency(item.price);
  const lineTotal: string = numToCurrency(item.price * item.quantity);

  const onRemoveFromCart = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };

  const content = (
    <li className="flex @container">
      <div
        className="grid grid-cols-1 @lg:grid-cols-[1fr_1fr] @xl:grid-cols-[minmax(15rem,_1fr)_1fr] gap-2 @md:gap-4 w-full items-center
       bg-gray-100 py-4 pl-4 pr-6 rounded-lg"
      >
        <div className="flex items-center gap-4 border-b-2 @lg:border-b-0 border-gray-200 pb-2">
          <Link
            to={`/products/${item.sku}`}
            className="rounded-full border-2 p-2 border-gray-200 overflow-hidden hover:bg-primary-50 hover:border-primary-200 hover:shadow-md"
            aria-label="View product"
          >
            <img src={img} alt={item.name} className="max-w-12 sm:max-w-14" />
          </Link>

          <div className="">
            <h3 className="text-lg font-semibold text-text-primary" aria-label="Item Name">
              {item.name}
            </h3>
            <p aria-label="Item SKU" className="text-xs text-gray-500">
              Ref: {item.sku}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 @xs:grid-cols-[1fr_1.5fr_1fr] place-items-center">
          <div className="hidden @xs:block">
            <p aria-label="Price per item">{productPrice}</p>
          </div>

          <CartLineItemStepper item={item} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} />

          <p aria-label="Line Total">{lineTotal}</p>
        </div>
      </div>

      <button
        type="button"
        className="bg-transparent rounded-r hover:bg-red-100 hover:text-red-500 py-4 px-4 md:px-8 xl:px-12 ml-[-5px]"
        onClick={onRemoveFromCart}
        aria-label="Remove item from cart"
        title="Remove item from cart"
      >
        <RemoveIcon className="text-2xl" />
      </button>
    </li>
  );

  return content;
};

const areItemsEqual = (
  { item: prevItem }: CartLineItemProps,
  { item: nextItem }: CartLineItemProps
) => {
  return Object.keys(prevItem).every(
    (key) => prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
  );
};

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual);

export default MemoizedCartLineItem;
