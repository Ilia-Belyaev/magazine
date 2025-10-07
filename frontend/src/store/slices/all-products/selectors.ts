import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeError = (state: Pick<State, NameSpace.Products>) => state[NameSpace.Products].isError;
const takeLoading = (state: Pick<State, NameSpace.Products>) => state[NameSpace.Products].isLoading;

export const getProducts = (state: Pick<State, NameSpace.Products>) => state[NameSpace.Products].products;

export const getError = createSelector(takeError, (error) => error);
export const getLoading = createSelector(takeLoading, (loading) => loading);

