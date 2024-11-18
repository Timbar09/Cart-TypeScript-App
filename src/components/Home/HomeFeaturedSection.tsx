import useProducts from '../../hooks/useProducts';

import { getProductImage } from '../../functions';

import Button from '../Button';

const HomeFeaturedSection = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="pt-20 pb-10">
      <h2 className="text-2xl text-text-primary mb-4">Featured Products</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {featuredProducts.map((product, i) => {
          const { sku, name, price, description } = product;
          const image: string = getProductImage(sku);
          const isFirstItem = i === 0;

          return (
            <li
              key={sku}
              className={`bg-gray-100 rounded-lg p-4 flex gap-4 justify-around ${
                isFirstItem
                  ? 'sm:col-span-2 lg:col-span-3 lg:row-span-2'
                  : 'lg:col-span-2 lg:row-span-1'
              }`}
            >
              <div>
                <h3 className="text-lg text-text-primary">{name}</h3>
                <p className="text-xs text-text-secondary max-w-44">{description}</p>

                <p className="text-lg text-text-primary font-semibold mt-2">${price}</p>

                <Button
                  to={`/products/${sku}`}
                  buttonRole="primary"
                  className="inline-block text-sm mt-4"
                >
                  View Product
                </Button>
              </div>

              <img
                src={image}
                alt={name}
                className={`w-32 h-32 ${
                  isFirstItem ? 'sm:w-52 sm:h-48 lg:w-[16rem] lg:h-[16rem]' : ''
                } object-cover rounded-lg`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HomeFeaturedSection;
