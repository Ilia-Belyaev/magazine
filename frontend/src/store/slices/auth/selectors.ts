import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

export const getAuth = (state: Pick<State, NameSpace.Auth>) => state[NameSpace.Auth].auth;
