import {buyCakeAction} from '../Actions/buyCakeAction';
import {createStore} from "redux";
import reducer from "../Reducers/buyCakeReducer";

export const store = () => {

    const store = createStore(reducer) //create the redux store
    console.log('Initial state: ', store.getState())

    const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

    store.dispatch(buyCakeAction())
    store.dispatch(buyCakeAction())
    store.dispatch(buyCakeAction())
    unsubscribe();

}
