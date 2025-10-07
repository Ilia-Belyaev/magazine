import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { UserData } from '../../../models/models';
import { dropUserData, setUserData } from './actions';

export const user = createSlice({
  name: NameSpace.User,
  initialState: {
    user: {} as UserData,
  },
  reducers: {},
  extraReducers: (builder) => {
    (builder)
      .addCase(setUserData, (state, action) => {
        state.user = action.payload;
      })
      .addCase(dropUserData, (state) => {
        state.user = {} as UserData;
      });
  }
});
