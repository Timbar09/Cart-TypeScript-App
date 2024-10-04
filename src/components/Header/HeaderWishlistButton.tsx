import { PiHeart as WishlistIcon } from 'react-icons/pi';

const HeaderWishlistButton = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 text-primary hover:text-text-primary bg-primary-100 hover:bg-gray-100 py-2 px-3 rounded-md"
    >
      <span className="text-sm">Wishlist</span>
      <WishlistIcon className=" text-lg" />
    </button>
  );
};

export default HeaderWishlistButton;
