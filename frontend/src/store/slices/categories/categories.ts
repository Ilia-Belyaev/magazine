import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { Categories } from '../../../models/models';
import { getAllCategories } from '../api-actions';

export const categories = createSlice({
  name: NameSpace.Categories,
  initialState: {
    categories: [] as Categories,
    isLoad: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase (getAllCategories.pending, (state) => {
        state.isLoad = true;
        state.isError = false;
      })
      .addCase (getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isError = false;
        state.isLoad = false;
      })
      .addCase (getAllCategories.rejected, (state) => {
        state.isError = true;
        state.isLoad = false;
      });
  }
});
