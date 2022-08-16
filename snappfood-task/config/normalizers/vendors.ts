import { Vendor } from './../../types/vendor';

export const normalizeVendors = (vendors: { data: Vendor; type: string }[]) => {
  const vendorsWithCorrectData = vendors
    // Remove uncorrect data which is not object
    .filter((vendor) => {
      if (typeof vendor.data === 'object') {
        return vendor.data;
      }
    })
    // set default data for each vendor
    .map((vendor) => {
      return {
        ...vendor.data,
        title: vendor.data.title ?? 'بون سی',
        deliveryFee: vendor.data.deliveryFee ?? 2500,
        eta: vendor.data.eta >= 1 ? vendor.data.eta : null,
      };
    })
    // remove undefined data
    .filter(Boolean);

  return vendorsWithCorrectData;
};
