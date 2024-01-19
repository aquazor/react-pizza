import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, CART } from '../constants/constants';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => {
    return {
      addCartItem: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
        query: (item) => ({
          url: `/${CART}`,
          method: 'POST',
          body: {
            ...item,
          },
        }),
      }),
    };
  },
});

export const { useAddCartItemMutation } = cartApi;
