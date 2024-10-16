import { useState } from 'react';
import useCart from '../../hooks/useCart';

import CartLine from './CartLine';
import CartNav from '../PageNav';

type CartProps = {
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setViewCart }: CartProps) => {
  const { dispatch, REDUCER_ACTIONS } = useCart();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [isCardDetailsOpen, setIsCardDetailsOpen] = useState<boolean>(false);

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const handlePlaceOrderClick = () => {
    setIsCardDetailsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="relative lg:flex lg:gap-4">
      <div className="flex-[1.5] xl:flex-[2]">
        <CartNav setViewCart={setViewCart} />

        <CartLine handlePlaceOrderClick={handlePlaceOrderClick} confirm={confirm} />
      </div>

      <div
        className={`${
          isCardDetailsOpen ? 'fixed lg:relative inset-0' : 'hidden'
        } bg-primary-100 self-stretch flex-${
          isCardDetailsOpen ? 1 : 0
        } transition-all duration-500`}
      >
        <div
          className={`${isCardDetailsOpen ? 'flex flex-col justify-between h-full' : 'hidden'} p-4`}
        >
          <header className="flex items-center justify-between p-4">
            <h2 className="text-text-primary">Payment Details</h2>

            <button
              type="button"
              onClick={handlePlaceOrderClick}
              className="text-text-primary"
              aria-label="Close"
            >
              Close
            </button>
          </header>

          <button
            type="button"
            onClick={onSubmitOrder}
            className="flex items-center justify-center w-full h-12 bg-primary text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
