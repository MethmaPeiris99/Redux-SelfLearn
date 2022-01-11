import {buyCakeAction} from '../Actions/buyCakeAction';
import {buyIceCreamAction} from "../Actions/buyIceCreamAction";
import {combineReducers, createStore} from "redux";
import buyCakeReducer from "../Reducers/buyCakeReducer";
import buyIceCreamReducer from "../Reducers/buyIceCreamReducer";

export const store = () => {
    const rootReducer = combineReducers({
        cake: buyCakeReducer,
        iceCream: buyIceCreamReducer
    })

    const store = createStore(rootReducer) //create the redux store
    console.log('Initial state: ', store.getState())

    const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

    store.dispatch(buyCakeAction())
    store.dispatch(buyCakeAction())
    store.dispatch(buyCakeAction())

    store.dispatch(buyIceCreamAction())
    store.dispatch(buyIceCreamAction())
    store.dispatch(buyIceCreamAction())

    unsubscribe();

}
