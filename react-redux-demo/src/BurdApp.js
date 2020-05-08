import React from 'react';
import LegumeContainer from './components/LegumeContainer';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import burdStore from './redux/burdStore';
import store from './redux/store';

function BurdApp() {
  return (
    <div>
    <h1 style={{ color: '#A0BB9E'}}>Welcome to the Burd App</h1>
    <Provider store={burdStore}>
      <div>
        <LegumeContainer />
      </div>
    </Provider>
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
    </div>
  );
}

export default BurdApp;
