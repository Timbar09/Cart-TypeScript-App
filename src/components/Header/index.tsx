import { Link } from 'react-router-dom';

import Container from '../Container';
import NavLink from './HeaderNavLink';

import logoImg from '../../assets/logo.png';

const Header = () => {
  const content = (
    <header className="border-y-2 border-gray-100">
      <Container className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8" />{' '}
          <h1 className="hidden sm:block text-text-primary italic text-lg">
            Easy<span className="font-bold">Pick</span>
          </h1>
        </Link>

        <ul className="flex items-center gap-3">
          <li>
            <NavLink to="/wishlist" linkName="Wishlist" />
          </li>

          <li>
            <NavLink to="/cart" linkName="Your Cart" />
          </li>

          <li>
            <button
              type="button"
              className="border border-gray-200 text-sm p-2 rounded-full hover:bg-primary-50"
              aria-label="User"
            >
              🧑🏾‍🦱
            </button>
          </li>
        </ul>
      </Container>
    </header>
  );

  return content;
};

export default Header;
