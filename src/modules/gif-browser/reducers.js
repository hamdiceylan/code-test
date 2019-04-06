import {combineReducers} from 'redux';
import { createAsyncReducer } from '../common/redux.helpers';
import { keys as gifActionKeys } from './actions';

const gifSuccessReducer = (state, action) => {
  const existingGifs = state.response ? state.response.data : [];
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      data: [
        ...existingGifs,
        ...action.response.data
      ]
    }
  };
}

const gifBrowserReducer = combineReducers({
  topGifs: createAsyncReducer(gifActionKeys.GET_GIFS, {
    [`${gifActionKeys.GET_GIFS}_SUCCESS`]: gifSuccessReducer
  })
});

export default gifBrowserReducer;
