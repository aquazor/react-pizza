import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CART, BASE_URL } from '../../constants/constants';

export const removeCartItem = createAsyncThunk(`${CART}/remove`, async (item) => {
  await axios.delete(`${BASE_URL}/${CART}/${item.id}`);
  return item;
});
