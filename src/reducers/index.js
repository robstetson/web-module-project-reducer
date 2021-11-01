import {APPLY_NUMBER, CHANGE_OPERATION, ADD_TO_MEMORY, CLEAR_MEMORY, CLEAR, ADD_TOTAL_MEMORY } from './../actions/index';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
       
        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR):
            return ({
                ...state,
                total: 0
            });
        case(ADD_TO_MEMORY):
            return ({
                ...state,
                memory: calculateResult(state.total, action.payload, state.operation)
            });
        case(ADD_TOTAL_MEMORY):
            return ({
                ...state,
                memory: action.payload
            });
        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0
            });
       
        default:
            return state;
    }
}

export default reducer;