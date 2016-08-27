export const logReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [...state, action.data];
        case 'LOAD_ENTRIES':
            return action.data;
        default:
            return state;
    }
};
