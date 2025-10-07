import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../../../models/models';

export const setUserData = createAction<UserData>('setUserData');

export const dropUserData = createAction('dropUserData');
