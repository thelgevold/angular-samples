export const logReducer = (state: any = [], action) => {
    switch (action.type) {

        case 'ADD_ENTRY':
            return [...state, action.data];

        case 'LOAD_ENTRIES':
            return action.data.logs;

        default:
            return state;
    }
};