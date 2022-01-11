import {call, put} from "redux-saga/effects";
import {getUserService} from "../Services/getUserService";
import {setUserAction} from "../Actions/setUserAction";

export function* getUserSaga(action){
    try {
        const response = yield call(getUserService);
        const {data} = response;
        yield put(setUserAction(data));
    }
    catch (error){
        console.log(error);
    }
}


