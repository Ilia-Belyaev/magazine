import { combineReducers } from 'redux';
import { createAPI } from '../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { allProducts } from './all-products/all-products';
import { categories } from './categories/categories';
import { auth } from './auth/auth';
import { basket } from './basket/basket';
import { user } from './user/user';
import { favoritesProducts } from './favorites-products/favorites-products';
import { currentProduct } from './current-product/current-product';

const api = createAPI();

export const createReducers = combineReducers({
  [NameSpace.Products]: allProducts.reducer,
  [NameSpace.Categories]: categories.reducer,
  [NameSpace.Auth]: auth.reducer,
  [NameSpace.Basket]: basket.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.FavoritesProducts]: favoritesProducts.reducer,
  [NameSpace.CurrentProduct]: currentProduct.reducer,
});

export const store = configureStore({
  reducer: createReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
