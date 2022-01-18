import {combineReducers, createStore, applyMiddleware} from "redux";
import fetchDataReducer from "../Reducers/fetchDataReducer";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "../Sagas/watcherSaga";

export const store = () => {
    const rootReducer = combineReducers({
        fetchData: fetchDataReducer
    })

    const sagaMiddleware = createSagaMiddleware(); //create the redux saga

    createStore(rootReducer,{},applyMiddleware(sagaMiddleware)); //create the redux store
    console.log('Initial state: ', store.getState())

    sagaMiddleware.run(watcherSaga)

}
