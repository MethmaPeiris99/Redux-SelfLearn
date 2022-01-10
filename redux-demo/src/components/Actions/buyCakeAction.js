import * as ActionTypes from './index';

export const buyCakeAction = () => {
    return{
        type: ActionTypes.BUY_CAKE,
        info: 'First redux action'
    }
}

// const redux = require('redux')
// const createStore = redux.createStore



// const initialState = {
//     numberOfCakes: 10
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return{
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         default:
//             return state    
//     }
// }

// const store = createStore(reducer) //create the redux store
// console.log('Initial state: ', store.getState())
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe()