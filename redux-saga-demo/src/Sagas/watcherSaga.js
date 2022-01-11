import {takeLatest} from "redux-saga/effects"
import {GET_USER} from "../Actions";
import {getUserSaga} from "./getUserSaga";

export default function* watcherSaga() {
    yield takeLatest(GET_USER, getUserSaga);

}