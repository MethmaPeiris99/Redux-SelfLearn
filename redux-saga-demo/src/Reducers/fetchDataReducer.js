import * as actionTypes from '../Actions';

const initialState = {
    loading: false,
    user: {},
    error: {}
};

export default function handleFetchDataReducer (action, state=initialState) {
    switch(action.type){
        case actionTypes.SEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: {}
            }
        case actionTypes.SEND_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                user: {},
                error: action.error
            }
        default:
            return state;
    }
}