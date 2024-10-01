import { useState } from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />

      <Container className="text-text-secondary">{pageContent}</Container>

      <Footer viewCart={viewCart} />
    </>
  );

  return content;
}

export default App;
