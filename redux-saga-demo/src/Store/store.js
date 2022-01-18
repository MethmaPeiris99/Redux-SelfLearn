import {combineReducers, createStore, applyMiddleware} from "redux";
import handleFetchDataReducer from "../Reducers/fetchDataReducer";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "../Sagas/watcherSaga";


    const rootReducer = combineReducers({
        fetchData: handleFetchDataReducer
    })

    const sagaMiddleware = createSagaMiddleware(); //create the redux saga

    const store = createStore(rootReducer,{},applyMiddleware(sagaMiddleware)); //create the redux store

    sagaMiddleware.run(watcherSaga)


export default store;
