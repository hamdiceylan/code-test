import {createAsyncActionCreator} from '../common/redux.helpers';
import * as gifService from './service';

export const keys = {
  'GET_GIFS': 'GET_GIFS',
};

export const getGifs = (keyword,page) => createAsyncActionCreator(
  keys.GET_GIFS,
  gifService.getGifs, 
  {keyword,page}
);

