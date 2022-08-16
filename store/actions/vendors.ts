import { AppState } from './../index';
import { VendorActions } from './../../types/store';
import { getVendorsRequest, VendorsParams } from '../../services/vendors/getVendors';
import { Dispatch } from 'redux';

import { types } from '../types/vendors';

const shouldLoadMore = (count: number, page: number, pageSize: number) => {
  return count > page * pageSize;
};

export const getNextPageVendors = (params: VendorsParams) => (dispatch: Dispatch, getState: () => AppState) => {
  if (typeof getState().vendors.count === 'number') {
    if (!shouldLoadMore(getState().vendors.count!, params?.page ?? 1, params?.page_size ?? 10)) {
      debugger;
      return;
    }
  }
  dispatch({ type: types.GET_VENDORS_REQUEST });

  getVendorsRequest(params)
    .then(({ data: { count, finalResult } }) => {
      dispatch({ type: types.GET_VENDORS_SUCCESS, payload: { vendors: finalResult, count } });
    })
    .catch((e) => {
      dispatch({ type: types.GET_VENDORS_FAILURE, payload: e });
    });
};
