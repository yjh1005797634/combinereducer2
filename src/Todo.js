/**
 * Created by apple on 18/9/7.
 */

import React,{Component} from 'react';
// import {createStore} from 'redux'
import {ADD_TODO,DELETE_TODO} from './actions'
import {store} from './store'


export default class Todo extends Component {

    constructor(props){

        super(props)

        this.state = {list: store.getState().todo.list};
    }



    handleChange = (event)=> {

        let text = event.target.value;
        if(event.keyCode === 13 && text.length >0){

          // let newList =  this.state.list.push(text);

            // this.setState({
            //     list:[...this.state.list,text]
            // })

            store.dispatch({
                type:ADD_TODO,
                text:text
            })
        }

    }

    deleteTodo = (index)=>{

        store.dispatch({
            type:DELETE_TODO,
            index:index
        })
    }


    componentWillMount(){

        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }

    render(){

        return (
            <div>

                <h3>渲染</h3>
                <input type="text" autoFocus="" onKeyDown={this.handleChange}/>
                <ul>
                    {
                        this.state.list.map((todo,index)=>(
                            <li key={index}>
                                {todo}
                                <button onClick={this.deleteTodo}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}












