import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CART, BASE_URL } from '../../constants/constants';

export const addCartItem = createAsyncThunk(`${CART}/add`, async (item) => {
  const { data } = await axios.post(`${BASE_URL}/${CART}`, item);
  return data;
});
