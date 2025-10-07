import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

export const getFavoriteProductsFromStore = (state: Pick<State, NameSpace.FavoritesProducts>) => state[NameSpace.FavoritesProducts].products;

