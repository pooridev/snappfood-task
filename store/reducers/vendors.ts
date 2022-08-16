import { types } from '../types/vendors';
import { InitialState, VendorActions } from './../../types/store';

const initialState: InitialState = {
  loading: true,
  vendors: [],
  count: null,
};

function VendorReducer(state = initialState, action: VendorActions) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_VENDORS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GET_VENDORS_SUCCESS: {
      return {
        ...state,
        loading: false,
        vendors: [...state.vendors.concat(payload.vendors)],
        count: payload.count,
      };
    }

    case types.GET_VENDORS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}

export default VendorReducer;
