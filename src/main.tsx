import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductsProvider } from './context/ProductsProvider.tsx';
import { CartProvider } from './context/CartProvider.tsx';

import App from './App.tsx';
import Home from './components/Home/index.tsx';
import Products from './components/Products/index.tsx';
import Product from './components/Products/ProductView.tsx';
import Cart from './components/Cart/index.tsx';
import Wishlist from './components/Wishlist/index.tsx';
import NoTMatch from './NoTMatch.tsx';

import './index.scss';

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
        path: '/products/:sku',
        element: <Product />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  </StrictMode>
);
