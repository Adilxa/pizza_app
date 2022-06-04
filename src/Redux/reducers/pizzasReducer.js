import { SET_ALL_PIZZA } from "../ActionTypes";

const initialState = {
    data:JSON.parse(localStorage.getItem('pizzas')) || [],
    pending: true,
}


export const pizzaReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_ALL_PIZZA:
            return  { ...state, data:action.payload }
        default:
            return state;
    }
}
