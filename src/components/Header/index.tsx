import Container from '../Container';
import HeaderCartButton from './HeaderCartButton';

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
          <h1 className="hidden sm:block text-text-primary font-bold italic text-xl">Easy Pick</h1>
        </div>

        {!viewCart && <HeaderCartButton viewCart={viewCart} setViewCart={setViewCart} />}
      </Container>
    </header>
  );

  return content;
};

export default Header;
