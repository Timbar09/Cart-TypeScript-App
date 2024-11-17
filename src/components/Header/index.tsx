import { Link } from 'react-router-dom';

import Container from '../Container';
import NavLink from './HeaderNavLink';

import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { PiHeart as WishlistIcon } from 'react-icons/pi';
import { MdOutlineShoppingBag as ShoppingBagIcon } from 'react-icons/md';

import logoImg from '../../assets/images/logo.png';

const links = [
  {
    id: 1,
    to: '/products',
    linkName: 'Shop',
    icon: <ShoppingBagIcon className=" text-lg" />,
  },
  {
    id: 2,
    to: '/wishlist',
    linkName: 'Wishlist',
    icon: <WishlistIcon className=" text-lg" />,
    hasCount: true,
  },
  {
    id: 3,
    to: '/cart',
    linkName: 'Your Cart',
    icon: <CartIcon className=" text-lg" />,
    hasCount: true,
  },
];

const Header = () => {
  const content = (
    <header className="border-y-2 border-gray-100 fixed top-0 left-0 right-0 z-50 bg-background-secondary">
      <Container className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8" />{' '}
          <h1 className="hidden sm:block text-text-primary italic text-lg">
            Easy<span className="font-bold">Pick</span>
          </h1>
        </Link>

        <ul className="flex items-center gap-3">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                linkName={link.linkName}
                icon={link.icon}
                hasCount={link.hasCount}
              />
            </li>
          ))}

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
