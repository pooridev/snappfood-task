import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { query } from '../../config';
import { Vendor } from '../../types';
import { AppState } from '../../store';
import { getNextPageVendors } from './../../store/actions/vendors';

export type VendorsParams = {
  lat: number;
  long: number;
  page?: number;
  page_size?: number;
};

export type VendorsResponse = {
  status: number;
  data: { count: number; open_count: number; finalResult: { type: string; data: Vendor[] }[] };
};

export const getVendorsRequest = (params: VendorsParams): Promise<VendorsResponse> => {
  return query.get('restaurant/vendors-list', {
    params,
  });
};

export const useGetVendors = (params: VendorsParams) => {
  const dispatch: any = useDispatch();

  const { page } = params;
  const { count, loading, vendors } = useSelector((state: AppState) => state.vendors);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    dispatch(getNextPageVendors(params));
  }, [page]);

  return { count, loading, vendors };
};
