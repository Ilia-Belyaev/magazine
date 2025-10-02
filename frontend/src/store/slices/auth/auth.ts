import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../constants';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

export const auth = createSlice({
  name: NameSpace.Auth,
  initialState: {
    auth: AuthorizationStatus.Unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.auth = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.auth = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.auth = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.auth = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.auth = AuthorizationStatus.NoAuth;
      });
  }
});
