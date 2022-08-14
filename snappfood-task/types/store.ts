import { types } from '../store/types/vendors';
import { Vendor } from './vendor';

export type InitialState = {
  loading: boolean;
  vendors: Vendor[];
  count: number;
};

export type VendorActions = {
  type: keyof typeof types;
  payload: Pick<InitialState, 'vendors' | 'count'>;
};
