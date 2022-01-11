import * as types from '../Actions';

const initialState = {
    user: undefined
};

export default function setUserReducer (state = initialState, action) {
    switch(action.type){
        case types.SET_USER:
            const {user} = action;
            return{
                ...state,
                user
            };
        default:
            return state
    }
}