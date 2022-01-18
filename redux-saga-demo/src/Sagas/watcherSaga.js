import {take, call, all} from "redux-saga/effects";
import {fetchDataSaga} from '../Sagas/fetchDataSaga';

export default function* watcherSaga() {
    yield all([
        fetchDataSaga()
    ]);

}