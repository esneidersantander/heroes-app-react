import { types } from "../types/types";

export const authReducer = (state ={}, action)=>{
    
    switch (action.type) {
        case types.login:
            return {
                ...action.pyaload,
                logged: true
            }            
        case types.logout:
            return {
                logged:false
            }
        default:
            return state;
    }
}