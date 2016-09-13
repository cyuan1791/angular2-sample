"use strict";
var counter_action_creators_1 = require('./counter-action-creators');
var initialState = { counter: 0 };
// Create our reducer that will handle changes to the state
exports.counterReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case counter_action_creators_1.INCREMENT:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case counter_action_creators_1.DECREMENT:
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
};
//# sourceMappingURL=counter-reducer.js.map