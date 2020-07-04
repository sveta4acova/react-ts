import { combineReducers } from 'redux';
import counter from './counter';
import { AppState } from '../interfaces';

export default combineReducers<AppState>({counter});
