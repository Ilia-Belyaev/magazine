import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { Product } from '../../../models/models';
import { getCurrentProductInfo } from '../api-actions';

export const currentProduct = createSlice({
  name: NameSpace.CurrentProduct,
  initialState: {
    product: {} as Product,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    (builder)
      .addCase(getCurrentProductInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCurrentProductInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCurrentProductInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload;
      });
  }
});
