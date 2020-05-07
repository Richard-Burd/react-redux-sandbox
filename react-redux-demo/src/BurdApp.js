import React from 'react';
import LegumeContainer from './components/LegumeContainer';
import { Provider } from 'react-redux';
import burdStore from './redux/burdStore';

function BurdApp() {
  return (
    <Provider store={burdStore}>
      <div>
        <LegumeContainer />
      </div>
    </Provider>
  );
}

export default BurdApp;
