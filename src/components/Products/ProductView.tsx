import { Link, useParams } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';
import { ProductType } from '../../context/ProductsProvider';

const ProductView = () => {
  const { sku } = useParams<{ sku: string }>();
  const { products } = useProducts();

  const product: ProductType | undefined = products.find((product) => product.sku === sku);
  const img: string = new URL(`../../images/${product?.sku}.jpg`, import.meta.url).href;

  const similarProducts: ProductType[] = products
    .filter((product) => product.sku !== sku)
    .slice(0, 3);

  return (
    <div
      id="product-view"
      className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-9rem)] min-h-[23rem]"
    >
      {product ? (
        <div className="product relative flex flex-col items-center gap-4 max-w-sm mx-auto border-2 border-gray-100 rounded-lg p-4">
          <h1 className="text-2xl text-text-primary">{product.name}</h1>
          <img src={img} alt={product.name} className="w-100" />

          <div className="left absolute top-[5%] bottom-[5%] right-[100%] border-2 border-gray-100 rounded-s-lg">
            <h3 className="text-lg text-text-primary w-max p-4">Similar Products</h3>

            <ul className="flex flex-col">
              {similarProducts.map((product, i) => (
                <li key={product.sku}>
                  <Link
                    to={`/products/${product.sku}`}
                    className={`block py-4 px-6 text-center hover:bg-gray-50 ${
                      i !== 0 ? 'border-t-2 border-gray-100' : ''
                    }`}
                  >
                    <div className="w-16 mx-auto">
                      <img
                        src={new URL(`../../images/${product.sku}.jpg`, import.meta.url).href}
                        alt={product.name}
                        className="w-100"
                      />
                      <p className="sr-only">{product.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="right absolute top-[5%] bottom-[5%] left-[100%] p-4 border-2 border-gray-100 rounded-e-lg">
            <p>{product.price}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-text-primary">Product not found</h2>

          <p>Sorry, the product you are looking for is not available.</p>
        </div>
      )}
    </div>
  );
};

export default ProductView;
