import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { Products } from '../../../models/models';
import { addProductToTheBasket, removeProductFromBasket } from './actions';
import { removeBasketProduct } from '../../../utilities/utilities';

export const basket = createSlice({
  name: NameSpace.Basket,
  initialState: {
    products: [] as Products,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToTheBasket, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProductFromBasket, (state, action) => {
        state.products = removeBasketProduct(state.products, action.payload);
      });
  }
});
