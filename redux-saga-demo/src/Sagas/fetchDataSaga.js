import {call, takeEvery, put} from "redux-saga/effects";
import * as types from "../Actions/index"
import axios from "axios";
import {fetchDataSuccess} from "../Actions/fetchDataSuccessAction";

function* asyncFetchRequest(action) {
    try {
        const url = `https://reqres.in/api/users/${action.payload}`
        const response = yield call(()=>axios.get(url))
        console.log(response);
        yield put(fetchDataSuccess(response.data.data.first_name))
    }
    catch (error){
        console.log(error);
    }
}

export function* fetchDataSaga(){

    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)

}


