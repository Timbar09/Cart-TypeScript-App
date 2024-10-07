import { PiHeart as WishlistIcon } from 'react-icons/pi';

import Button from '../Button';

const HeaderWishlistButton = () => {
  return (
    <Button
      type="button"
      className="flex items-center gap-1 px-2 md:px-3"
      buttonRole="secondary"
      aria-label="View Wishlist"
    >
      <span className="hidden md:inline-block text-sm">Wishlist</span>
      <WishlistIcon className=" text-lg" />
    </Button>
  );
};

export default HeaderWishlistButton;
