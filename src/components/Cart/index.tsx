import { useState } from 'react';
import useCart from '../../hooks/useCart';

import CartLine from './CartLine';
import CartNav from '../PageNav';
import Checkout from './Checkout';

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
    setIsCardDetailsOpen(false);
  };

  const handlePlaceOrderClick = () => {
    setIsCardDetailsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="relative md:flex md:gap-4">
      <div className="flex-[1.5] xl:flex-[2]">
        <CartNav setViewCart={setViewCart} />

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
