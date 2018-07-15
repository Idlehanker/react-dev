import React, { Component } from 'react';
import { createStore } from 'redux';

import Counter from './redux-simples/counter/components/Counter';
import counter from './redux-simples/counter/reducers/index';


const store = createStore(counter);
export class CppComponent extends Component{

	render(){
		return (
			<Counter
				value = {store.getState()}
				onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
				onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
			/>
		);
	}
}

export const Cpp = ()=> {
	<CppComponent/>;
	return store.subscribe(CppComponent);
};
