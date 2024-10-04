import Container from '../Container';
import HeaderCartButton from './HeaderCartButton';
import HeaderWishlistButton from './HeaderWishlistButton';

import logoImg from '../../assets/logo.png';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header>
      <Container className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8" />{' '}
          <h1 className="hidden sm:block text-text-primary italic text-lg">
            Easy<span className="font-bold">Pick</span>
          </h1>
        </div>

        {!viewCart && (
          <div className="flex items-center gap-4">
            <HeaderWishlistButton />
            <HeaderCartButton viewCart={viewCart} setViewCart={setViewCart} />
            <button
              type="button"
              className="border border-gray-200 text-sm text-white p-2 rounded-full hover:bg-gray-50"
              aria-label="User"
            >
              🧑🏾‍🦱
            </button>
          </div>
        )}
      </Container>
    </header>
  );

  return content;
};

export default Header;
