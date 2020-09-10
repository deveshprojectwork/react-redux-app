import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose } from 'redux'; //thung (applyMiddleware,compose)
import { Provider } from 'react-redux';
import reducer from "./reducers/reducer"
import thunk from "redux-thunk" //thung

//second argument used to storing react redux - brower
// const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //erdux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //thung
const store = createStore(reducer, composeEnhancers (applyMiddleware(thunk))); //thung devtols



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//https://www.youtube.com/watch?v=pSzY5kh9MCs&list=PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp&index=11
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
