import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import counterReducer from './Reducers/counter'
import {helloSaga} from "./sagas";

export const store = () => {
    const sagaMiddleware = createSagaMiddleware(); //creat a saga middleware

    //create redux store
    //Apply the created saga middleware to the store using applyMiddleware()
    createStore(counterReducer,applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(helloSaga) //start the created saga

    //const action = type => store.dispatch({type})

    const unsubscribe = store.subscribe(() => console.log('State: ',store.getState()))
    unsubscribe();

}

