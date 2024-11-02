import { Link } from 'react-router-dom';

import { IoChevronForwardOutline as ChevronRightIcon } from 'react-icons/io5';
import { BsHouse as ProductsIcon } from 'react-icons/bs';

type CartProps = {
  path: string;
};

const PageNav = ({ path }: CartProps) => {
  const pathChain = path.split('/');

  return (
    <nav className="flex items-center gap-2 text-gray-300 py-4">
      <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
        <ProductsIcon className="text-2xl" />
        <span>Products</span>
      </Link>
      <ChevronRightIcon />

      <span>{pathChain}</span>
    </nav>
  );
};
export default PageNav;
