import { Link } from 'react-router-dom';

import Container from '../Container';
import NavLink from './HeaderNavLink';

import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { PiHeart as WishlistIcon } from 'react-icons/pi';
import { BsGrid3X3Gap as ProductsIcon } from 'react-icons/bs';

import logoImg from '../../assets/logo.png';

const links = [
  {
    id: 1,
    to: '/products',
    linkName: 'Products',
    icon: <ProductsIcon className=" text-sm" />,
  },
  {
    id: 2,
    to: '/wishlist',
    linkName: 'Wishlist',
    icon: <WishlistIcon className=" text-lg" />,
  },
  {
    id: 3,
    to: '/cart',
    linkName: 'Your Cart',
    icon: <CartIcon className=" text-lg" />,
  },
];

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
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to} linkName={link.linkName} icon={link.icon} />
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
