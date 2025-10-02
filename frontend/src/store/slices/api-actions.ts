import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Categories, Products, UserData } from '../../models/models';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../models/state';
import { ApiRoute } from '../../constants';
import { dropToken, saveToken } from '../services/token';

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

export const getAllCategories = createAsyncThunk<Categories, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'getCategories',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Categories>(ApiRoute.Categories);

    return data;
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});

    saveToken(data.token);
    // dispatch(setUserData(data));
    // dispatch(redirectToRoute(AppRoute.Main));
    // dispatch(fetchOfferAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    // dispatch(dropUserData());
    // dispatch(setFavoriteOffers([]));
    // dispatch(removeFavoriteOffers());
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(ApiRoute.Login);
  },
);
