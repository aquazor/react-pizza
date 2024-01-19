import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CART, BASE_URL } from '../../constants/constants';

export const fetchCartItems = createAsyncThunk(`${CART}/fetch`, async () => {
  const { data } = await axios.get(`${BASE_URL}/${CART}`);

  return data;
});
