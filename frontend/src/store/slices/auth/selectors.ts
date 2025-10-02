import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeAuth = (state: Pick<State, NameSpace.Auth>) => state[NameSpace.Auth].auth;

export const getAuth = createSelector(takeAuth, (auth) => auth);
