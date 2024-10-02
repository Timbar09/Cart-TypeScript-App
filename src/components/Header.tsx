import useCart from '../hooks/useCart';

import { FaCartShopping as CartIcon } from 'react-icons/fa6';

import Container from './Container';
// import Button from './Button';

import logoImg from '../assets/logo.png';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header>
      <Container className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8" />{' '}
          <h1 className="hidden sm:block text-text-primary font-bold italic text-xl">Easy Pick</h1>
        </div>

        <div className="flex items-center gap-1 bg-gray-100 py-1 pr-4 pl-2 rounded-md">
          <button
            className="cart__logo relative hover:bg-gray-200 p-2 rounded-full"
            type="button"
            onClick={() => setViewCart(!viewCart)}
          >
            <CartIcon className="text-text-primary text-xl" />

            {totalItems > 0 && (
              <span
                className="absolute top-0 left-0 bg-red-500 text-background-primary text-[0.55rem] font-bold w-4 h-4 grid place-items-center rounded-full"
                aria-label="Total items in cart"
              >
                {totalItems}
              </span>
            )}
          </button>

          <span className="text-md text-text-primary font-bold">{totalPrice || '$0'}</span>
        </div>
      </Container>
    </header>
  );

  return content;
};

export default Header;
