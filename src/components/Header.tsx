import useCart from '../hooks/useCart';

import Container from './Container';
import Button from './Button';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header>
      <Container className="flex justify-between items-center py-4">
        <h1>React Shop</h1>

        <div className="flex items-center gap-1">
          <Button handleClick={() => setViewCart(!viewCart)}>
            {viewCart ? 'Back to Products' : 'View Cart'}
          </Button>

          <div className="text-xs text-text-secondary flex flex-col justify-between">
            <p>
              Items: <span className="text-text-primary font-bold">{totalItems}</span>
            </p>

            <p>
              Total: <span className="text-text-primary font-bold">{totalPrice || '$0'}</span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );

  return content;
};

export default Header;
