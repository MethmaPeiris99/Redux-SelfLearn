import * as ActionTypes from './index';

export const setUserAction = (user) => {
    return{
        type: ActionTypes.SET_USER,
        info: 'Second user action',
        user
    }
}