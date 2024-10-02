import useCart from '../hooks/useCart';

import Container from './Container';

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  return (
    <footer>
      <Container className="text-sm text-text-secondary items-center py-4 flex justify-between">
        {viewCart && (
          <p>
            <span className="text-text-primary font-bold">{totalItems}</span> item
            {totalItems !== 1 && 's'} amounting to{' '}
            <span className="text-text-primary font-bold">{totalPrice || '$0'}</span> in your cart.
          </p>
        )}

        <p>&copy; {year} React Shop. All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
