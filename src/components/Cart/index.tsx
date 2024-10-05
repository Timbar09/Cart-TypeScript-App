import CartLine from './CartLine';

import CartNav from '../PageNav';

type CartProps = {
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setViewCart }: CartProps) => {
  return (
    <div>
      <CartNav setViewCart={setViewCart} />

      <CartLine />
    </div>
  );
};
export default Cart;
