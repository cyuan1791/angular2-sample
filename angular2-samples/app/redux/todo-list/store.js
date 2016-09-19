"use strict";
// TodoStore (store.ts)
var redux_1 = require('redux');
var todos_1 = require('./reducers/todos');
// Create the store using the todos reducer
exports.TodoStore = redux_1.createStore(todos_1.todos);
// Publish action to add a new Todo
exports.addTodo = function (title) {
    // Dispatch will publish an action of type 'ADD_TODO', which
    // runs through the reducer and gets caught in the 
    // case 'ADD_TODO': block
    exports.TodoStore.dispatch({
        type: 'ADD_TODO',
        title: title
    });
    console.log('add' + title);
};
// Publish action to toggle a Todo
exports.toggleTodo = function (index) {
    exports.TodoStore.dispatch({
        type: 'TOGGLE_TODO',
        index: index
    });
};
//# sourceMappingURL=store.js.map