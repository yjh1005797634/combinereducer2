/**
 * Created by apple on 18/9/7.
 */

import {ADD_TODO,DELETE_TODO} from '../actions'



/*
 1.先创建reducer 处理state 和 action
 */
let reducer = (state={list:[]},action)=>{

    if(action === undefined) return state;

    switch (action.type){

        case ADD_TODO:
            return {list:[...state.list,action.text]}

        case DELETE_TODO:

            state.list.splice(action.index,1);

            return {list:[...state.list]}

        default:
            return state;
    }

}

export default reducer;