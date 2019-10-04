import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer'
import reduxThunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store