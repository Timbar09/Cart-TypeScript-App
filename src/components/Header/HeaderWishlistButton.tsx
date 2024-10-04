import { PiHeart as WishlistIcon } from 'react-icons/pi';

const HeaderWishlistButton = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 text-primary hover:text-text-primary bg-primary-100 hover:bg-gray-100 py-2 px-2 md:px-3 rounded-md"
      aria-label="View Wishlist"
    >
      <span className="hidden md:inline-block text-sm">Wishlist</span>
      <WishlistIcon className=" text-lg" />
    </button>
  );
};

export default HeaderWishlistButton;
