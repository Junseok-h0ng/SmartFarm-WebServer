import axios from 'axios';
import{all,fork,call,put,takeLatest} from 'redux-saga/effects'
import { LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from '../_redux/_reducer/user_reducer';



function loadUserAPI(){
    return axios.get('http://localhost:3000/user',{
        withCredentials:true
    });
}


function* loadUser(){
    try{
        const result = yield call(loadUserAPI);
        console.log('result');
        console.log(result);
            yield put({
                type: LOAD_USER_SUCCESS,
                data: result.data
            });
    }catch(err){
        yield put({
            type: LOAD_USER_FAILURE,
            error: err
        });
    }
}


function* watchLoadUser(){
    yield takeLatest(LOAD_USER_REQUEST,loadUser);
}


export default function* userSaga(){
    yield all([
        fork(watchLoadUser),

    ]);
}