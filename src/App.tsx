import { useState } from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Cart from './components/Products/Cart';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart setViewCart={setViewCart} /> : <Products />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />

      <Container className="text-text-secondary px-14">{pageContent}</Container>

      <Footer viewCart={viewCart} />
    </>
  );

  return content;
}

export default App;
