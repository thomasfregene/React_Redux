import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';

const createStoreWithMiddleWare = applyMiddleWare()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare()}>
    <App />
  </Provider>
,document.getElementById('root'));

