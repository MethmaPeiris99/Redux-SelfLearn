import * as types from '../Actions';

const initialState = {
    numberOfCakes: 10,
};

export default function buyCakeReducer (state = initialState, action) {
    switch(action.type){
        case types.BUY_CAKE:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state    
    }
}