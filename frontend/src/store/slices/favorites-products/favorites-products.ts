import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { Products } from '../../../models/models';
import { getFavoriteProducts } from '../api-actions';
import { removeFavoriteProducts } from './actions';

export const favoritesProducts = createSlice({
  name: NameSpace.FavoritesProducts,
  initialState: {
    products: [] as Products,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    (builder)
      .addCase(getFavoriteProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFavoriteProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getFavoriteProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(removeFavoriteProducts, (state) => {
        state.products = [] as Products;
      });
  }
});
