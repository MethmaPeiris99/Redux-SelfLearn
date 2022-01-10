import * as ActionTypes from './index';

export const buyCakeAction = () => {
    return{
        type: ActionTypes.BUY_CAKE,
        info: 'First redux action'
    }
}
