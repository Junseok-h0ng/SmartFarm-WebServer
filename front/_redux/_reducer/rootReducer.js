import {HYDRATE} from "next-redux-wrapper";
import { combineReducers } from "redux";
import testReducer from './test'

export const reducer = (state = {}, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        test:testReducer
    })
}