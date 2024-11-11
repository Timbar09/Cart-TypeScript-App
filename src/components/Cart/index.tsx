import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useCart from '../../hooks/useCart';

import CartLine from './CartLine';
import CartNav from '../PageNav';
import Checkout from './Checkout';

const Cart = () => {
  const { dispatch, REDUCER_ACTIONS } = useCart();
  const location = useLocation();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [isCardDetailsOpen, setIsCardDetailsOpen] = useState<boolean>(false);

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
    setIsCardDetailsOpen(false);
  };

  const handlePlaceOrderClick = () => {
    setIsCardDetailsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="relative md:flex md:gap-4 min-h-[calc(100vh-4rem)] pt-20 pb-10 overflow-y-auto">
      <div className="flex-[1.5] xl:flex-[2]">
        <CartNav path={location.pathname} />

        <CartLine
          handlePlaceOrderClick={handlePlaceOrderClick}
          isCardDetailsOpen={isCardDetailsOpen}
          confirm={confirm}
        />
      </div>

      <Checkout
        handlePlaceOrderClick={handlePlaceOrderClick}
        isCardDetailsOpen={isCardDetailsOpen}
        onSubmitOrder={onSubmitOrder}
      />
    </div>
  );
};
export default Cart;
