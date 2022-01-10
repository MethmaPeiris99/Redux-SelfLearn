import * as ActionTypes from './index';

export const buyIceCreamAction = () => {
    return{
        type: ActionTypes.BUY_ICE_CREAM,
        info: 'Second redux action'
    }
}