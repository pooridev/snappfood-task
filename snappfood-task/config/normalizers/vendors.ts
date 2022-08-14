import { Vendor } from './../../types/vendor';

export const normalizeVendors = (vendors: Vendor[]) => {
  const vendorsWithCorrectData = vendors.filter((vendor: any) => {
    if (typeof vendor.data === 'object') {
      return vendor.data;
    }
  });

  return vendorsWithCorrectData;
};
