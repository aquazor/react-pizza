import { createSlice } from '@reduxjs/toolkit';
import { fetchCartItems } from '../thunks/fetchCartItems';
import { addCartItem } from '../thunks/addCartItem';
import { removeCartItem } from '../thunks/removeCartItem';

const getEqualProperties = (obj1, obj2) => {
  const idIsEqual = obj1.id === obj2.id;
  const sizeIsEqual = obj1.size === obj2.size;
  const typeIsEqual = obj1.type === obj2.type;

  return { idIsEqual, sizeIsEqual, typeIsEqual };
};

const getPriceSum = (arr) => {
  return arr.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartItemsCount: 0,
    cartItemsPrice: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    incrementItemCount: (state, { payload }) => {
      const sameItem = state.cartItems.find((obj) => {
        const { idIsEqual, sizeIsEqual, typeIsEqual } = getEqualProperties(obj, payload);
        return idIsEqual && sizeIsEqual && typeIsEqual;
      });

      sameItem.count += 1;
      state.cartItemsCount += 1;
    },
    dencrementItemCount: (state, { payload }) => {
      const sameItem = state.cartItems.find((obj) => {
        const { idIsEqual, sizeIsEqual, typeIsEqual } = getEqualProperties(obj, payload);
        return idIsEqual && sizeIsEqual && typeIsEqual;
      });

      if (sameItem.count > 0) {
        sameItem.count -= 1;
        state.cartItemsCount -= 1;
      }
    },
    clearCart: (state, { payload }) => {
      state.cartItems = [];
      state.cartItemsCount = 0;
    },
  },
  extraReducers: (builder) => {
    // FETCH CART ITEMS

    builder.addCase(fetchCartItems.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCartItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload;
    });

    builder.addCase(fetchCartItems.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });

    // ADD CART ITEM

    builder.addCase(addCartItem.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addCartItem.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      const sameItem = state.cartItems.find((item) => {
        const { sizeIsEqual, typeIsEqual } = getEqualProperties(item, payload);
        const idIsEqual = item.item_id === payload.item_id;

        return idIsEqual && sizeIsEqual && typeIsEqual;
      });

      if (!sameItem) {
        state.cartItems.push(payload);
      } else {
        sameItem.count += 1;
      }

      state.cartItemsCount += 1;
      state.cartItemsPrice = getPriceSum(state.cartItems);
    });

    builder.addCase(addCartItem.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });

    // REMOVE CART ITEM

    builder.addCase(removeCartItem.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(removeCartItem.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.cartItems = state.cartItems.filter((item) => {
        const { idIsEqual, sizeIsEqual, typeIsEqual } = getEqualProperties(item, payload);
        return !(idIsEqual && sizeIsEqual && typeIsEqual);
      });

      if (state.cartItemsCount > 0) {
        state.cartItemsCount -= payload.count;
      }

      state.cartItemsPrice = getPriceSum(state.cartItems);
    });

    builder.addCase(removeCartItem.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export const { incrementItemCount, dencrementItemCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
