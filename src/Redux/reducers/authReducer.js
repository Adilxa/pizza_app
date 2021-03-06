import { SET_AUTH } from "../ActionTypes"
import { SET_LOGOUT } from "../ActionTypes"
const initialState = {
    pending:false,
    data: JSON.parse(localStorage.getItem('auth'))
}

export const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state , data: action.payload}
        case SET_LOGOUT:
            return {...state , data:null}
        default: 
            return state  
    } 
}