import * as ActionTypes from './index';

export function fetchData(data){
    return{
        type: ActionTypes.SEND_REQUEST,
        payload: data
    }
}