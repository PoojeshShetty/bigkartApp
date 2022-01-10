
const authReducer = (state,action) => {
    
    switch(action.type)
    {
        case 'LOGIN':
            return {...state, user:{...action.payload},uid:action.payload.uid}
        case 'IS_AUTH_READY':
            return {...state,isAuthReady:true,user:action.payload}
        case 'UPDATE_UID':
            return {...state,uid:action.payload}
        case 'LOGOUT':
            return {...state,user:null,uid:null}
        default:
            return state
    }
}

const initialState = {
    user:null,
    isAuthReady: false,
    uid:null
}

export {
    initialState,
    authReducer
}