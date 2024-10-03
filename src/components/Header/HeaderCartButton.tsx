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
      className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-md"
      type="button"
      onClick={() => setViewCart(!viewCart)}
    >
      <span className="text-sm text-text-primary">Your Cart</span>

      <div className="relative ">
        <CartIcon className="text-text-primary text-xl" />

        {totalItems > 0 && (
          <span
            className="absolute top-[-0.35rem] right-[-0.35rem] bg-red-500 text-background-primary text-[0.55rem] font-bold w-4 h-4 grid place-items-center rounded-full"
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
