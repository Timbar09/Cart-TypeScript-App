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
    <header className="border-y-2 border-gray-100">
      <Container className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8" />{' '}
          <h1 className="hidden sm:block text-text-primary italic text-lg">
            Easy<span className="font-bold">Pick</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <HeaderWishlistButton />
          {!viewCart && <HeaderCartButton viewCart={viewCart} setViewCart={setViewCart} />}

          <button
            type="button"
            className="border border-gray-200 text-sm p-2 rounded-full hover:bg-primary-50"
            aria-label="User"
          >
            🧑🏾‍🦱
          </button>
        </div>
      </Container>
    </header>
  );

  return content;
};

export default Header;
