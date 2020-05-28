const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        //if this case happens, the state plus and error will go to the root reducer then store under the auth: key. the root reducer is our store based on the keys it has associated with reducers.
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.error.message
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('logged out');
            return {
                ...state
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}  

export default authReducer;
