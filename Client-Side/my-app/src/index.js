import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//import reducer from './store/reducer';
import authReducer from './store/reducers/auth/auth';
import foodReducer from './store/reducers/food/food';
import foodCompareReducer from './store/reducers/food/foodCompare';
import cartReducer from './store/reducers/cart/cart';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  auth: authReducer,
  food: foodReducer,
  foodCompare: foodCompareReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      // console.log('[Middleware] Dispatching', action);
      const result = next(action);
      // console.log('[Middleware] next state', store.getState())
      return result;
    }
  }
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)) );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// DEFAULT SETUPS ON REDUX
// import store from './app/store';
// import { Provider } from 'react-redux';


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
