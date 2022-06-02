import { createStore ,combineReducers} from "redux"


// const reducer = (state = { count: 0 }, action) => {

//     switch (action.type) {
//         case 'plus':
//             return { count: state.count + 1 }
//         case 'minus':
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }

const initialState = {
    data: [],
    pending: true,
}
const pizzaReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_ALL_PIZZA":
            return  { ...state, data:action.payload }
        default:
            return state;
    }
}

const initialStateBasket = {
    data: JSON.parse(localStorage.getItem('cartPizza')) || [],
    pending: true,
}
const basketReducer = (state = initialStateBasket, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_PIZZA_BASKET":
            return  { ...state,data:[ ...state.data,action.payload ]}
        default:
            return state;
    }
}

const reducers = combineReducers({
    pizzas:pizzaReducer,
    basket:basketReducer
})
export const store = createStore(reducers)

window.store = store;