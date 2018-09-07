/**
 * Created by apple on 18/9/7.
 */

import {DECREASE,INCREASE} from '../actions'

//1.创建reducer

let reducer = (state = {num:0},action)=>{

    if(action === undefined) return state;

    switch (action.type){

        case INCREASE:
            return {num:state.num + action.amount}

        case DECREASE:
            return {num:state.num - action.amount}

        default:
            return state;
    }
}

export default reducer;