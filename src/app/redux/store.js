import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState = {}) {
  return createStore(
    combineReducers({
      contactsReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(reduxLogger)),
  );
}
