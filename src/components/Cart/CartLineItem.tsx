import { memo, ReactElement } from 'react';
import { CartItemType } from '../../context/CartProvider';
import { ReducerAction, ReducerActionType } from '../../context/CartProvider';

import { IoClose as RemoveIcon } from 'react-icons/io5';

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

  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity;
  const optionValues: number[] = [...Array(highestQuantity).keys()].map((i) => i + 1);

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        className="grid grid-cols-1 @md:grid-cols-[1fr_1fr] @lg:grid-cols-[minmax(15rem,_1.5fr)_1fr] gap-2 @md:gap-4 w-full items-center
       bg-gray-100 py-4 pl-4 pr-6 rounded-lg"
      >
        <div className="flex items-center gap-4 border-b-2 @md:border-b-0 border-gray-200 pb-2">
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

        <div className="grid grid-cols-2 @xs:grid-cols-3">
          <div className="hidden @xs:block">
            <p aria-label="Price per item">{productPrice}</p>
          </div>

          <div>
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <select name="quantity" id="quantity" value={item.quantity} onChange={onChangeQuantity}>
              {options}
            </select>
          </div>

          <p className="text-text-primary font-semibold" aria-label="Line Total">
            {lineTotal}
          </p>
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
