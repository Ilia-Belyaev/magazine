import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { CustomProducts } from '../../../models/models';
import { addProductToTheBasket, removeBasket, removeProductFromBasket } from './actions';
import { addBusketProduct, removeBasketProduct } from '../../../utilities/utilities';

export const basket = createSlice({
  name: NameSpace.Basket,
  initialState: {
    products: [] as CustomProducts,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToTheBasket, (state, action) => {
        state.products = addBusketProduct(state.products, action.payload);
      })
      .addCase(removeProductFromBasket, (state, action) => {
        state.products = removeBasketProduct(state.products, action.payload);
      })
      .addCase(removeBasket, (state) => {
        state.products = [] as CustomProducts;
      });
  }
});
