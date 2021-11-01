export const ADD_ONE = "ADD_ONE";
export const CLEAR = 'CLEAR';
export const ADD_TO_MEMORY ='ADD_TO_MEMORY';
export const EDIT_MEMORY ='EDIT_MEMORY';
export const CLEAR_MEMORY ='CLEAR_MEMORY';
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TOTAL_MEMORY = "ADD_TOTAL_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const clearAction = () => {
    return({type:CLEAR});
}
export const addToMemory = (number) => {
    return({type:ADD_TO_MEMORY, payload:number});
}
export const editMemory = (number) => {
    return({type:EDIT_MEMORY, payload:number});
}
export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}
export const changeOpperation = (symbol) => {
    return({type:CHANGE_OPERATION, payload:symbol});
}
export const memoryTotal = (number) =>{
    return({type:ADD_TOTAL_MEMORY, payload:number});
}

 