import { createStore, combineReducers } from 'redux';
import list from './list/reducer';

export const store = createStore(combineReducers({list}));
