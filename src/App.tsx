import { useState } from 'react';

import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header />
      {pageContent}
      <Footer />
    </>
  );

  return content;
}

export default App;
