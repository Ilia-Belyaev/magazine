import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

export const getCurrentProduct = (state: Pick<State, NameSpace.CurrentProduct>) => state[NameSpace.CurrentProduct].product;
