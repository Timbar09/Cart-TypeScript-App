import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { ProductsProvider } from './context/ProductsProvider.tsx';
import { CartProvider } from './context/CartProvider.tsx';

import router from './router';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  </StrictMode>
);
