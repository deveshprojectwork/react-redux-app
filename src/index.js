import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose, combineReducers } from 'redux'; //thung (applyMiddleware,compose)
import { Provider } from 'react-redux';
// import reducer from "./reducers/reducer" //only till the thung and redux, now we use nameReducer for combined reducer
import namereducer from "./reducers/nameReducer"
import wishReducer from "./reducers/wishReducer"
import thunk from "redux-thunk" //thung

const masterReducer = combineReducers({
  cname:namereducer,
  wish:wishReducer
})
//second argument used to storing react redux - brower
// const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //erdux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //thung
const store = createStore(masterReducer,{cname:"Suresh", wish:["apple", "mango"]}, composeEnhancers (applyMiddleware(thunk))); //thung devtols, setting default for combined reducer



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
