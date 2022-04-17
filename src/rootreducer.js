import {combineReducers} from 'redux';
import { dropdwn_clr_Reducer,dropdwn_JS_Reducer,AuthReducer} from './redux/reducer';

export const rootReducer=combineReducers({
    drp_clr_Data:dropdwn_clr_Reducer,
    drp_js_Data:dropdwn_JS_Reducer,
    auth:AuthReducer,
});