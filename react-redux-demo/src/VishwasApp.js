import React from 'react';
import IceCreamContainer from './components/IceCreamContainer'
import store from './redux/store';
import { Provider } from 'react-redux';

function VishwasApp() {
  return (
    <div>
      <Provider store={store}>
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default VishwasApp;
