import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Products/ProductView';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import NoTMatch from './NoTMatch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoTMatch />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'products/:sku',
        element: <Product />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
