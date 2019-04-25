import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './main.scss';
import './assets/product.png';

import rootReducer from './store/reducer';

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = <Provider store={store}>
                <App />
            </Provider>;

ReactDOM.render(app, document.getElementById('root'));