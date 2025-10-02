import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeCategories = (state: Pick<State, NameSpace.Categories>) => state[NameSpace.Categories].categories;

export const getCategories = createSelector(takeCategories, (categories) => categories);
