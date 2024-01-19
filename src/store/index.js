import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
export * from './thunks/addCartItem';
export * from './thunks/removeCartItem';
