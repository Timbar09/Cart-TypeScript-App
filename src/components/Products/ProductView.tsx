import { useParams } from 'react-router-dom';

const ProductView = () => {
  const { sku } = useParams<{ sku: string }>();
  // console.log(sku);
  const product = {
    sku: '123',
    name: 'Product Name',
    price: 123.45,
  };

  return (
    <div id="product-view">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>
        SKU: <code>{sku}</code>
      </p>
    </div>
  );
};

export default ProductView;
