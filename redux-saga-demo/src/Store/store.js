import {setUserAction} from '../Actions/setUserAction';
import {combineReducers, createStore, applyMiddleware} from "redux";
import setUserReducer from "../Reducers/setUserReducer";
import createSagaMiddleware from "redux-saga";


export const store = () => {
    const rootReducer = combineReducers({
        setUser: setUserReducer
    })

    const sagaMiddleware = createSagaMiddleware(); //create the redux saga

    const middleware = [sagaMiddleware];

    const store = createStore(rootReducer,{},applyMiddleware(...middleware)); //create the redux store
    console.log('Initial state: ', store.getState())


}
