

export const SET_ALL_PIZZA = 'SET_ALL_PIZZA'
export const SET_PIZZA_BASKET = 'SET_PIZZA_BASKET'
export const DELETE_PIZZA_BASKET = 'DELETE_PIZZA_BASKET'
export const SET_AUTH = 'SET_AUTH'
export const SET_LOGOUT = 'SET_LOGOUT'



export const setAuth = (data) =>{
    return {
        type: SET_AUTH,
        payload:data
    }
}

export const setLogOut = (data) =>{
    return {
        type:SET_LOGOUT,
        payload:data
    }
}