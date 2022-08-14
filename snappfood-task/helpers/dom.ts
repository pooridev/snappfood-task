import { SyntheticEvent } from 'react';

type Type = 'cover' | 'logo';

export const onImageError = ({ currentTarget }: SyntheticEvent<HTMLImageElement, Event>, type: Type) => {
  // prevents looping
  currentTarget.onerror = null;

  currentTarget.src =
    type === 'cover'
      ? 'https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5c0036431f0dc.jpg'
      : 'https://cdn.snappfood.ir/400x266/uploads/images/vendor-cover-app-review/8/25.jpg';
};
