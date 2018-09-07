/**
 * Created by apple on 18/9/7.
 */

import {createStore} from 'redux';
import counter from './reducers/counter'
import todo from './reducers/todo'
import combineReducers from './combineReducers'



let reducer = combineReducers({
        counter,
        todo
    });


let store = createStore(reducer);

export  {store};