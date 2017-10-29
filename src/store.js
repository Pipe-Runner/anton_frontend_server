import { createStore, compose } from 'redux';
import rootReducer from './reducer';
import persistState from 'redux-localstorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(persistState('appshell'));

const store = createStore(rootReducer, enhancer);

export default store;
