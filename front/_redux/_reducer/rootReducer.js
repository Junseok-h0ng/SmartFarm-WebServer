import {HYDRATE} from "next-redux-wrapper";

export const reducer = (state = {}, action) => {
    if (action.type === HYDRATE) {
        console.log("HYDRATE", action);
        return {
            ...state,
            ...action.payload
        };
    }
}