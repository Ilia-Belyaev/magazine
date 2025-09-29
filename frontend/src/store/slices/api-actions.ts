import { createAsyncThunk } from '@reduxjs/toolkit';
import { Products } from '../../models/models';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../models/state';
import { ApiRoute } from '../../constants';

export const getCards = createAsyncThunk<Products, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'getCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Products>(ApiRoute.Products);

    return data;
  }
);
