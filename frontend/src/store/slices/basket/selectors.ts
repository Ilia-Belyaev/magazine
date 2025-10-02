import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeProductsToTheBasket = (state: Pick<State, NameSpace.Basket>) => state[NameSpace.Basket].products;

export const getProductsToTheBasketCount = createSelector(takeProductsToTheBasket, (products) => products.length);

export const getProductsToTheBasket = createSelector(takeProductsToTheBasket, (products) => products);
