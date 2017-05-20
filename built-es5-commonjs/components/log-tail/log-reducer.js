"use strict";
exports.logReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.concat([action.data]);
        case 'LOAD_ENTRIES':
            return action.data;
        default:
            return state;
    }
};
