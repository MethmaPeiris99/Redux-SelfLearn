import {setUserAction} from '../Actions/setUserAction';
import {combineReducers, createStore} from "redux";
import setUserReducer from "../Reducers/setUserReducer";

export const store = () => {
    const rootReducer = combineReducers({
        setUser: setUserReducer
    })

    const store = createStore(rootReducer) //create the redux store
    console.log('Initial state: ', store.getState())


}
