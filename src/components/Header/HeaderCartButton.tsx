import useCart from '../../hooks/useCart';

// import { FaCartShopping as CartIcon } from 'react-icons/fa6';
import { IoCartOutline as CartIcon } from 'react-icons/io5';

type HeaderCartButtonProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderCartButton = ({ viewCart, setViewCart }: HeaderCartButtonProps) => {
  const { totalItems } = useCart();

  return (
    <button
      className="flex items-center gap-1 text-primary hover:text-text-primary bg-primary-100 hover:bg-gray-100 py-2 px-2 md:px-3 rounded-md"
      type="button"
      onClick={() => setViewCart(!viewCart)}
      aria-label="View Cart"
    >
      <span className="hidden md:inline-block text-sm">Your Cart</span>

      <div className="relative ">
        <CartIcon className="text-lg" />

        {totalItems > 0 && (
          <span
            className="absolute top-[-0.45rem] right-[-0.65rem] bg-red-500 text-background-primary text-[0.55rem] font-bold w-4 h-4 grid place-items-center rounded-full"
            aria-label="Total items in cart"
          >
            {totalItems}
          </span>
        )}
      </div>
    </button>
  );
};
export default HeaderCartButton;
