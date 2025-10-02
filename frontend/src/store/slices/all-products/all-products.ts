import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { Products } from '../../../models/models';
import { getCards } from '../api-actions';
import { decrementProduct, incrementProduct } from './actions';
import { replaceStockCurrentProduct } from '../../../utilities/utilities';

export const allProducts = createSlice ({
  name: NameSpace.Products,
  initialState: {
    products: [] as Products,
    isError: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase (getCards.fulfilled, (state, action) => {
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getCards.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(decrementProduct, (state, action) => {
        state.products = replaceStockCurrentProduct(state.products, action.payload);
      })
      .addCase(incrementProduct, (state, action) => {
        state.products = replaceStockCurrentProduct(state.products, action.payload);
      });
  },
});
