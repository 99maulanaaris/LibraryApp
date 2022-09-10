import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {laporanReducer} from './laporan';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  homeReducer,
  laporanReducer,
});

export default reducer;
