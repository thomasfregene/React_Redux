import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import promiseMiddleWare from 'redux-promise'

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
,document.getElementById('root'));

