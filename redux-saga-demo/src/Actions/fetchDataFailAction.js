import * as ActionTypes from './index';

export const fetchDataFail = (error) => {
    return{
        type: ActionTypes.SEND_REQUEST_FAIL,
        payload: {},
        error: error
    }
}