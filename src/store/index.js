import reducer from './reducer'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
export default store