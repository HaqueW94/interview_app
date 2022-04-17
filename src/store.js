import {createStore} from 'redux'
import { rootReducer } from './rootreducer';

export const Store=createStore(rootReducer);
