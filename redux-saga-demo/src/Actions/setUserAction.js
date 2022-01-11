import * as ActionTypes from './index';

export const setUserAction = () => {
    return{
        type: ActionTypes.SET_USER,
        info: 'Second user action'
    }
}