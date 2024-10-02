import { memo, ReactElement } from 'react';
import { CartItemType } from '../context/CartProvider';
import { ReducerAction, ReducerActionType } from '../context/CartProvider';

import Button from './Button';

type CartLineItemProps = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: CartLineItemProps): JSX.Element => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href;

  const lineTotal: number = item.price * item.quantity;

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
    <li className="flex items-center gap-4 bg-gray-50 p-4 rounded">
      <img src={img} alt={item.name} className="max-w-24" />

      <h2 aria-label="Item Name">{item.name}</h2>

      <p aria-label="Price per item">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(item.price)}
      </p>

      <label htmlFor="quantity" className="offscreen">
        Quantity
      </label>
      <select name="quantity" id="quantity" value={item.quantity} onChange={onChangeQuantity}>
        {options}
      </select>

      <p aria-label="Line Total">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(lineTotal)}
      </p>

      <Button
        handleClick={onRemoveFromCart}
        aria-label="Remove item from cart"
        title="Remove item from cart"
      >
        X
      </Button>
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
