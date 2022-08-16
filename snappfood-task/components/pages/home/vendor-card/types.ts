import { CSSProperties } from 'react';

import { Vendor } from '../../../../types/vendor';

export type VendorCardProps = {
  vendor: Vendor;
  virtualizeStyles: CSSProperties;
};
