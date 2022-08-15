import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'react-virtualized/styles.css';

import '../styles/main.scss';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
