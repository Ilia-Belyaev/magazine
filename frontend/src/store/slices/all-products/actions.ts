import { createAction } from '@reduxjs/toolkit';
import { StockStatusValue } from '../../../models/models';

export const decrementProduct = createAction<StockStatusValue>('decrementCurrentProduct');

export const incrementProduct = createAction<StockStatusValue>('incrementCurrentProduct');

export const setCurrentFavoriteProduct = createAction<number>('addCurrentFavoriteProduct');

