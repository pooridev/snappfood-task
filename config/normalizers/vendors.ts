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
    .map((vendor, index) => {
      const showhHardCodedEta = vendor.data.eta < 1 && index === 0 ? true : false;
      const showRealEta = vendor.data.eta >= 1 && index !== 0;

      return {
        ...vendor.data,
        title: vendor.data.title ?? 'بون سی',
        deliveryFee: vendor.data.deliveryFee ?? 2500,
        eta: showRealEta ? vendor.data.eta : showhHardCodedEta ? 25 : null,
      };
    })
    // remove falsy items
    .filter(Boolean);

  return vendorsWithCorrectData;
};
