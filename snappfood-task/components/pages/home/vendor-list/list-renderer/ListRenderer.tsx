import { memo } from 'react';
import { areEqual } from 'react-window';

import { VendorCard } from '../../vendor-card';

const ListRenderer = ({ data }: any) => {
  return data.map((vendor: any) => <VendorCard {...vendor} />);
};

export default ListRenderer;
