const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error', action.error.message);
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
            console.log('Signup error', action.error.message);
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}  

export default authReducer;
