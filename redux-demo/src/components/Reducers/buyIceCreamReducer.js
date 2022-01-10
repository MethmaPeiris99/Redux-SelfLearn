import * as types from '../Actions';

const initialState = {
    numberOfIceCreams: 20
};

export default function buyIceCreamReducer (state = initialState, action) {
    switch(action.type){
        case types.BUY_ICE_CREAM:
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default:
            return state
    }
}