import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Categories, Product, Products, UserData } from '../../models/models';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../models/state';
import { ApiRoute } from '../../constants';
import { dropToken, getToken, saveToken } from '../services/token';
import { dropUserData, setUserData } from './user/actions';
import { removeFavoriteProducts } from './favorites-products/actions';

export const getCards = createAsyncThunk<Products, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'getCards',
  async (_arg, {extra: api}) => {
    const token = getToken();
    const {data} = await api.get<Products>(ApiRoute.Products, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    dispatch(setUserData(data));
    // dispatch(redirectToRoute(AppRoute.Main));
    dispatch(getCards());
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
    dispatch(dropUserData());
    dispatch(getCards());
    dispatch(removeFavoriteProducts());
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const token = getToken();
    const { data } = await api.get<string>(ApiRoute.CheckLogin, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
);

export const getUserData = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/getUserData',
  async (_arg, { dispatch, extra: api }) => {
    const token = getToken();
    const { data } = await api.get<UserData>(ApiRoute.Login, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setUserData(data));
  },
);

export const getFavoriteProducts = createAsyncThunk<Products, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'getFavoriteProducts',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const token = getToken();
      const {data} = await api.get<Products>(ApiRoute.GetFavorites, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error);
    }
  },
);

export const setFavoriteProduct = createAsyncThunk<undefined, Product, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'setFavoriteProduct',
  async ({id}, {extra: api, rejectWithValue}) => {
    try {
      const token = getToken();

      await api.post(ApiRoute.SetFavorite,{id}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        // передаем только сообщение ошибки
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
);

export const removeFavoriteProduct = createAsyncThunk<string, Product, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'dropFavoriteProduct',
  async ({ id }, {extra: api, rejectWithValue}) => {
    try {
      const token = getToken();
      const {data} = await api.delete<string>(`${ApiRoute.DropFavorite}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error : unknown) {
      return rejectWithValue(error);
    }
  },
);

export const getCurrentProductInfo = createAsyncThunk<Product, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'getProductInfo',
  async (id, {extra: api}) => {
    const {data} = await api.get<Product>(`${ApiRoute.CurrentProduct}/${id}`);

    return data;
  }
);
