// TodoStore (store.ts)
import {combineReducers, createStore, Store} from 'redux';
import {todos} from './reducers/todos';

// Create the store using the todos reducer
export const TodoStore: Store<any> = createStore(todos);

// Publish action to add a new Todo
export const addTodo: Function = (title: String) : void => {
	// Dispatch will publish an action of type 'ADD_TODO', which
	// runs through the reducer and gets caught in the 
	// case 'ADD_TODO': block
	TodoStore.dispatch({
		type: 'ADD_TODO',
		title
	})
    console.log('add'+ title);
}


// Publish action to toggle a Todo
export const toggleTodo: Function = (index: Number) : void => {
	TodoStore.dispatch({
		type: 'TOGGLE_TODO',
		index
	})
}