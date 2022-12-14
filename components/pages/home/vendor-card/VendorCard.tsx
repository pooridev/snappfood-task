import { FC, SyntheticEvent } from 'react';

import { DeliveryIcon, StarIcon } from '../../../../assets/icons';
import { formatPrice, toPersianDigit } from '../../../../helpers/numbers';
import { onImageError } from '../../../../helpers/dom';
import { VendorCardProps } from './types';

const rateElementCSSClass = (rate: number) => {
  if (rate > 4.5) {
    return 'starColor-45';
  } else if (rate > 4) {
    return 'starColor-40';
  }

  if (rate > 3.5) {
    return 'starColor-35';
  } else if (rate > 3) {
    return 'starColor-30';
  }

  if (rate > 2.5) {
    return 'starColor-25';
  } else if (rate > 2) {
    return 'starColor-20';
  }

  if (rate > 1.5) {
    return 'starColor-15';
  } else if (rate > 1) {
    return 'starColor-10';
  }
};

const VendorCard: FC<VendorCardProps> = (props) => {
  const { vendor, virtualizeStyles } = props;
  const {
    eta,
    rate,
    backgroundImageCustom,
    deliveryFee,
    description,
    isZFExpress,
    logo,
    title,
    best_coupon,
    voteCount,
  } = vendor;

  const imageErrorHandler = (type: 'cover' | 'logo') => {
    return (e: SyntheticEvent<HTMLImageElement, Event>) => {
      onImageError(e, type);
    };
  };

  return (
    <div style={virtualizeStyles}>
      <article className="vendor-card">
        <header className="vendor-card__header">
          {best_coupon && <p className="vendor-card__header-couponText">{best_coupon}</p>}

          <img
            className="vendor-card__header-cover"
            src={backgroundImageCustom}
            alt={title + ' cover'}
            onError={imageErrorHandler('cover')}
          />
          <span className="vendor-card__header-logo">
            <img src={logo} alt={title + ' logo'} onError={imageErrorHandler('logo')} />
          </span>
        </header>
        <div className="vendor-card__content">
          <div className="vendor-card__content-top">
            <h5 className="vendor-card__content-top_title">{title}</h5>
            {!!rate && (
              <div className="vendor-card__content-top_leftSide">
                <span className="vendor-card__content-top_ratingCount">
                  <span className="vendor-card__content-top_separator">(</span>
                  {toPersianDigit(voteCount)}
                  <span className="vendor-card__content-top_separator">)</span>
                </span>
                <div className={'vendor-card__content-top_rate ' + rateElementCSSClass(rate)}>
                  <span>{toPersianDigit(rate)}</span>
                  <StarIcon
                    svgProps={{ className: rateElementCSSClass(rate) }}
                    pathProps={{ className: rateElementCSSClass(rate) }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="vendor-card__content-middle">
            <p className="vendor-card__content-middle-description">{description}</p>
          </div>
          <div className="vendor-card__content-bottom">
            <div className="vendor-card__content-bottom-deliveryType">
              <p>{isZFExpress ? '?????????? ????????????' : '?????? ??????????????'}</p>
              <span className="vendor-card__content-bottom-deliveryType_price">
                {deliveryFee > 0 ? formatPrice(deliveryFee) + '?????????? ' : '???????????? '}
              </span>
            </div>
            {eta && (
              <div className="vendor-card__content-bottom-deliveryTime">
                <p>???? {toPersianDigit(eta)} ??????????</p>
                <DeliveryIcon />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default VendorCard;
