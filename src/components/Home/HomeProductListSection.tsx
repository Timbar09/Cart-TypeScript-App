import useProducts from '../../hooks/useProducts';

import Product from '../Products/Product';
import Button from '../Button';

const HomeProductListSection = () => {
  const { products } = useProducts();
  const shortListedProducts = products.slice(0, 12);

  return (
    <section className="pt-10 pb-10">
      <h2 className="text-2xl text-text-primary mb-4">Explore Our Products</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shortListedProducts.map((product) => (
          <Product key={product.sku} product={product} />
        ))}
      </ul>

      <div className="text-center mt-8">
        <Button to="/products" buttonRole="secondary">
          View All Products
        </Button>
      </div>
    </section>
  );
};

export default HomeProductListSection;
