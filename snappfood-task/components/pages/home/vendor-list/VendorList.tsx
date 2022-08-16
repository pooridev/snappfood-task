import { useState } from 'react';
import { AutoSizer, InfiniteLoader, List, WindowScroller } from 'react-virtualized';

import { userLocation } from '../../../../helpers/location';
import { useGetVendors } from '../../../../services/vendors/getVendors';
import { VendorCard } from '../vendor-card';

const VendorList = () => {
  const [page, setPage] = useState(1);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const { vendors, count, loading } = useGetVendors({ ...userLocation!, page });

  const hasNextPage = page * 10 < count!;
  const itemCount = hasNextPage ? vendors.length + 1 : vendors.length;

  const isRowLoaded = ({ index }: { index: number }) => !!vendors[index];

  const handleNewPageLoad = async () => {
    setIsNextPageLoading(true);
    setPage((pageCount) => pageCount + 1);
    setIsNextPageLoading(loading);
    return;
  };

  const loadMoreRows = isNextPageLoading ? async () => {} : handleNewPageLoad;

  return (
    <main className="vendors-list">
      <AutoSizer disableHeight={true}>
        {({ width }) => (
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={itemCount}>
                {({ onRowsRendered, registerChild }) => (
                  <List
                    onRowsRendered={onRowsRendered}
                    rowCount={itemCount}
                    rowRenderer={({ index, key, style }) => {
                      const vendor = vendors[index];
                      if (vendor) return <VendorCard key={key} vendor={vendor} virtualizeStyles={style} />;
                    }}
                    autoHeight
                    overscanRowsCount={5}
                    ref={registerChild}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    rowHeight={255}
                    scrollTop={scrollTop}
                    width={width}
                  />
                )}
              </InfiniteLoader>
            )}
          </WindowScroller>
        )}
      </AutoSizer>
    </main>
  );
};

export default VendorList;
