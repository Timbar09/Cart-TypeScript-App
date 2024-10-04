import { PiHeart as WishlistIcon } from 'react-icons/pi';

const HeaderWishlistButton = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-md"
    >
      <span className="text-sm text-text-primary">Wishlist</span>
      <WishlistIcon className="text-text-primary tex-lg" />
    </button>
  );
};

export default HeaderWishlistButton;
