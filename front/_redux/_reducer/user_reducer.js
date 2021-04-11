export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';


export const initialState = {
    isLogin:false,
    isLoading:false,
}

export default function (state=initialState, action){

switch(action.type){
    case LOAD_USER_REQUEST:
        return{
            ...state,
            isLoading:true,
            i:false
        }
    case LOAD_USER_SUCCESS:{
        return{
            ...state,
            isLogin: true,
            isLoading:false,
            data:action.data
        }
    }
    case LOAD_USER_FAILURE:{
        return{
            ...state,
            isLoading:false,
        }
    }
    default:
        return {
            ...state
        }
}
}