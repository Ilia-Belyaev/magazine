import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

export const getCategories = (state: Pick<State, NameSpace.Categories>) => state[NameSpace.Categories].categories;

