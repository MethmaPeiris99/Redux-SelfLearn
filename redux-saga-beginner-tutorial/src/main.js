import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'

import {helloSaga} from "./sagas";


export const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(applyMiddleware(sagaMiddleware)); //create redux store

    sagaMiddleware.run(helloSaga)

    const action = type => store.dispatch({type})
}

