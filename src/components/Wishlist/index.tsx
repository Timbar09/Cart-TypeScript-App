import { ReactElement } from 'react';

import useWishlist from '../../hooks/useWishlist';

import Product from '../Products/Product';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  let content: ReactElement | ReactElement[] = <div>Loading...</div>;

  if (wishlist?.length) {
    content = wishlist.map((product) => {
      return <Product key={product.sku} product={product} />;
    });
  }

  return (
    <div className="@container min-h-[calc(100vh-4rem)] pt-20 pb-10 overflow-y-auto">
      <header className=" py-4">
        <h2 className="text-3xl font-medium text-text-primary">Wishlist</h2>
      </header>

      <ul className="@xs:grid @xs:grid-cols-2 @xl:grid-cols-3 lg:grid-cols-4 gap-4">{content}</ul>
    </div>
  );
};

export default Wishlist;
