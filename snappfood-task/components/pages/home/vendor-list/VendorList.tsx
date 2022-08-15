import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLocation } from '../../../../helpers/location';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList } from 'react-window';
// import { InfiniteLoader, List } from 'react-virtualized';
import { useGetVendors } from '../../../../services/vendors/getVendors';
import { AppDispatch, AppState, useAppDispatch } from '../../../../store';
import { getNextPageVendors } from '../../../../store/actions/vendors';
import { VendorCard } from '../vendor-card';

import useWindowSize from '../../../../hooks/useWindowSize';
import { ListRenderer } from './list-renderer';

const VendorList = () => {
  const [page, setPage] = useState(1);
  const { vendors, count, loading } = useGetVendors({ ...userLocation!, page });
  const { height } = useWindowSize();

  const hasNextPage = page * 10 < count!;

  const itemCount = hasNextPage ? vendors.length + 1 : vendors.length;

  function isRowLoaded({ index }: { index: number }) {
    return !!vendors[index];
  }
  const isItemLoaded = (index: number) => index < vendors.length && vendors[index] !== null;

  // const fetchNextPage = () => {
  //   setPage(page + 1);
  // };

  const fetchNextPage = (startIndex: number, stopIndex: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (!loading) {
          setPage(page + 1);
          resolve();
        }
      }, 0);
    });
  };

  return (
    <main className="vendors-list">
      {/* <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={fetchNextPage} rowCount={1}>
        {({ onRowsRendered, registerChild }) => (
          <List
            height={height}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={20}
            rowHeight={20}
            rowRenderer={({ key, index }) => {
              return vendors.map((vendor) => <VendorCard key={vendor.id} {...vendor} />);
            }}
            width={300}
          />
        )}
      </InfiniteLoader> */}

      <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={fetchNextPage}>
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            className="vendors-list__infiniteScroll"
            itemCount={itemCount}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={200}
            height={height}
            itemSize={100}
            children={ListRenderer}
            itemData={vendors}
            // innerElementType={ListRenderer}
          />
        )}
      </InfiniteLoader>
      {/* {vendors.map((vendor) => (
        <VendorCard {...vendor} />
      ))}
      */}
    </main>
  );
};

export default VendorList;
