"use strict";
var initialState = [
    { title: "Read the todo list", completed: true },
    { title: "Look at the code", completed: false }
];
function todos(state, action) {
    if (state === void 0) { state = initialState; }
    // Redux reducers typically use a switch statement 
    // to determine how to handle a given action
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                {
                    title: action.title,
                    completed: false
                }
            ]);
        case 'TOGGLE_TODO':
            var todo = state[action.index];
            var toggledTodo = Object.assign({}, todo, {
                completed: !todo.completed
            });
            return state.slice(0, action.index).concat([
                toggledTodo
            ], state.slice(action.index + 1));
        default:
            return state;
    }
}
exports.todos = todos;
//# sourceMappingURL=todos.js.map