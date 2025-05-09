import { Crypto } from '../../core/models/Crypto';

export type StackParamList = {
  Home: undefined;
  Detail: { crypto: Crypto };
  Favorites: undefined;
};