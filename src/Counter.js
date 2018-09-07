/**
 * Created by apple on 18/9/7.
 */

import React,{Component} from 'react';
// import {createStore} from 'redux'
import {INCREASE,DECREASE} from './actions'
import {store} from './store'

export default class Counter extends Component {

    constructor(props){

        super(props);
        this.state = {
            num : store.getState().counter.num
        }
    }


    add = ()=>{

        // alert('增加')

        store.dispatch({
            type:INCREASE,
            amount:3
        })

        console.log(store.getState().counter.num);
    };

    reduce =()=>{
        store.dispatch({
            type:DECREASE,
            amount:2
        })
    }

    componentWillMount(){

        store.subscribe(
            ()=>{
                this.setState({
                    // num:store.getState().num
                    num:store.getState().counter.num
                })
            }
        )
    }


    render(){

        return (
            <div>
                <p>{store.getState().counter.num}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.reduce}>-</button>

            </div>
        )
    }
}



