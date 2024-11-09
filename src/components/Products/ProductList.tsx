import { ReactElement } from 'react';

import useProducts from '../../hooks/useProducts';

import Product from './Product';

const ProductList = () => {
  const { products } = useProducts();

  let content: ReactElement | ReactElement[] = <div>Loading...</div>;

  if (products?.length) {
    content = products.map((product) => {
      return <Product key={product.sku} product={product} />;
    });
  }

  return (
    <div className="@container">
      <header className=" py-4">
        <h2 className="text-3xl font-medium text-text-primary">Products</h2>
      </header>

      <ul className="@xs:grid @xs:grid-cols-2 @xl:grid-cols-3 lg:grid-cols-4 gap-4">{content}</ul>
    </div>
  );
};

export default ProductList;
