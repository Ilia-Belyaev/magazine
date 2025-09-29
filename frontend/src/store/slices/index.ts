import { combineReducers } from 'redux';
import { createAPI } from '../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { AllProducts } from './all-products/all-products';

const api = createAPI();

export const createReducers = combineReducers({
  [NameSpace.Products]: AllProducts.reducer,
});

export const store = configureStore({
  reducer: createReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
