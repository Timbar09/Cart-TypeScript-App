import { memo } from 'react';
import { CartItemType } from '../../context/CartProvider';
import { ReducerAction, ReducerActionType } from '../../context/CartProvider';

import { IoClose as RemoveIcon } from 'react-icons/io5';
import { GrFormAdd as AddIcon, GrFormSubtract as SubtractIcon } from 'react-icons/gr';

type CartLineItemProps = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: CartLineItemProps): JSX.Element => {
  const numToCurrency = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  const img: string = new URL(`../../images/${item.sku}.jpg`, import.meta.url).href;

  const productPrice: string = numToCurrency(item.price);
  const lineTotal: string = numToCurrency(item.price * item.quantity);

  const onStepperClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    if (id === 'decrement' && item.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...item, quantity: item.quantity - 1 },
      });
    }

    if (id === 'increment' && item.quantity < 20) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...item, quantity: item.quantity + 1 },
      });
    }
  };

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

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
          <img
            src={img}
            alt={item.name}
            className="max-w-14 sm:max-w-16 rounded-full border-2 border-gray-200"
          />

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

          <div className="flex items-center gap-1">
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>

            <button
              className="border hover:bg-primary-50 active:bg-primary-100 w-5 h-5 grid place-items-center rounded-full"
              type="button"
              id="decrement"
              aria-label="Decrement quantity"
              onClick={onStepperClick}
            >
              <SubtractIcon />
            </button>
            <input
              className="w-8 text-center border border-gray-200 rounded-md"
              type="number"
              id="quantity"
              value={item.quantity}
              max={20}
              min={1}
              readOnly
              onChange={onChangeQuantity}
            />
            <button
              className="border hover:bg-primary-50 active:bg-primary-100 w-5 h-5 grid place-items-center rounded-full"
              type="button"
              id="increment"
              aria-label="Increment quantity"
              onClick={onStepperClick}
            >
              <AddIcon />
            </button>
          </div>

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
