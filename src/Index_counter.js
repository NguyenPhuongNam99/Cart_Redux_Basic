import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Acount from './Acount';

const initalState={
    counter:0
}

const reducer =(state=initalState,action) =>{
    switch(action.type){
        case 'INCRESE':
            return {counter:state.counter +1}
        case 'DECRESE':
            return{counter : state.counter -1}
    }
    return state

}

const store = createStore(reducer)
const Index_counter =()=>{
    return(
        <Provider store={store}>
            <Acount />
        </Provider>
    )
}
export default Index_counter