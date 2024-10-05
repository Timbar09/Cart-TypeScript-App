import { useState } from 'react';

import useCart from '../hooks/useCart';

import {
  IoSquareOutline as ProductsIcon,
  IoChevronForwardOutline as ChevronRightIcon,
} from 'react-icons/io5';

import CartLineItem from './CartLineItem';
import Button from './Button';

type CartProps = {
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setViewCart }: CartProps) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const content = confirm ? (
    <div>
      <h1>Order Confirmed</h1>
      <p>Thank you for your order!</p>
    </div>
  ) : (
    <div>
      <nav className="flex items-center gap-2 text-gray-300 py-2">
        <button
          type="button"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          onClick={() => setViewCart(false)}
        >
          <ProductsIcon className="text-2xl" />
          <span>Products</span>
        </button>
        <ChevronRightIcon />
        <span>Cart</span>
      </nav>

      <header className=" py-4">
        <h2 className="text-3xl font-medium text-text-primary">Your Shopping Cart</h2>
      </header>

      <ul className="flex flex-col gap-4">
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>

      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
      </div>

      <Button handleClick={onSubmitOrder} disabled={!totalItems}>
        Place Order
      </Button>

      <Button handleClick={() => setViewCart(false)}>Go Back to Products</Button>
    </div>
  );

  return content;
};

export default Cart;
