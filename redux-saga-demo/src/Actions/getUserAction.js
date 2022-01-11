import * as ActionTypes from './index';

export const getUserAction = () => {
    return{
        type: ActionTypes.GET_USER,
        info: 'First user action'
    }
}