// import { useState } from 'react';

import useCart from '../../hooks/useCart';

import CartLineItem from './CartLineItem';
import Button from '../Button';

type CartLineProps = {
  handlePlaceOrderClick: () => void;
  isCardDetailsOpen: boolean;
  confirm: boolean;
};

const CartLine = ({ handlePlaceOrderClick, isCardDetailsOpen, confirm }: CartLineProps) => {
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const placeOrderButtonDisabled = !totalItems || isCardDetailsOpen ? true : false;

  const content = confirm ? (
    <div>
      <h1>Order Confirmed</h1>
      <p>Thank you for your order!</p>
    </div>
  ) : (
    <div>
      <header className=" py-4">
        <h2 className="text-3xl font-medium text-text-primary">Your Shopping Cart</h2>
      </header>

      {cart.length ? (
        <ul className="flex flex-col gap-4 py-6">
          {cart.map((item) => (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          ))}
        </ul>
      ) : (
        <div className="min-h-40 grid place-items-center">
          <p>Your cart is empty</p>
        </div>
      )}

      <footer className="@container">
        <div className="flex flex-col-reverse @sm:flex-row justify-between items-center gap-4 py-4">
          <Button
            buttonRole="primary"
            className={`w-full @sm:w-auto ${
              placeOrderButtonDisabled ? 'cursor-not-allowed bg-gray-300 hover:bg-gray-300' : ''
            }
              `}
            handleClick={handlePlaceOrderClick}
            disabled={placeOrderButtonDisabled}
          >
            Place Order
          </Button>

          {/* <p>Total Items: {totalItems}</p> */}
          <div className="flex items-center gap-5">
            <p>
              Subtotal: <span className="text-text-primary font-semibold">{totalPrice}</span>
            </p>

            <span className="hidden @sm:block invisible px-4 md:px-8 xl:px-12"></span>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default CartLine;
