/**
 * Created by apple on 18/9/7.
 */


/*
 一个应用 必须只有一个仓库 必须合并 那如何合并 ?
 // {counter:{num:0} , todo:{list:[]}}
 */
/*
 高阶函数 给一个参数 返回一个函数
 */
let combineReducers = (reducers)=>


    //传入旧的状态和action  返回新的状态
    (state={counter:{num:0},todo:{list:[]}},action) => {  // 合并后 返回一个单独的reducer

        let newState = {};

        if(action === undefined) return state;
        //循环赋值
        for(var key in reducers) {

            newState[key] = reducers[key](state[key],action);

        }
        return newState;
    }


/*
 传入多个reducer 变量名和对象一样 可以省略变量

 let reducer = combineReducers({
 counter:counter
 todo:todo


 });

 */

export default combineReducers;