import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './Products/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
