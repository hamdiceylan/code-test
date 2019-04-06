import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import gifBrowserReducer from './modules/gif-browser/reducers';

const rootReducer = combineReducers({
  gifBrowser: gifBrowserReducer
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddlware,
      loggerMiddleware
    )
  )
);

export default store;
