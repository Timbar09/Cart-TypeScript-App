import {
  IoSquareOutline as ProductsIcon,
  IoChevronForwardOutline as ChevronRightIcon,
} from 'react-icons/io5';

type CartProps = {
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageNav = ({ setViewCart }: CartProps) => {
  return (
    <nav className="flex items-center gap-2 text-gray-300 py-2">
      <button
        type="button"
        className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
        onClick={() => setViewCart(false)}
      >
        <ProductsIcon className="text-2xl" />
        <span>Products</span>
      </button>
      <ChevronRightIcon />
      <span>Cart</span>
    </nav>
  );
};
export default PageNav;
