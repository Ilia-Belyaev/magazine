import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeUserData = (store: Pick<State, NameSpace.User>) => store[NameSpace.User].user;

export const getUserData = createSelector(takeUserData, (user) => user);
