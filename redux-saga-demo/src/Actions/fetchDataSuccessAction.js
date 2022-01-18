import * as ActionTypes from './index';

export const fetchDataSuccess = (user) => {
    return{
        type: ActionTypes.SEND_REQUEST_SUCCESS,
        payload: user
    }
}