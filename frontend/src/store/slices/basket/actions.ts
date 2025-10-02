import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../../models/models';

export const addProductToTheBasket = createAction<Product>('addProductToTheBasket');

export const removeProductFromBasket = createAction<Product>('removeProductFromBasket');

