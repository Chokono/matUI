const loginState = {
	errorEmail: false,
	errorPassword: false,
	emailValue: '',
	passwordValue: '',
}

export default function LoginStateReduser(state = loginState, action) {
    if (action.type === 'loginEmailValue') {
    	return {
        	...state,
        	emailValue: action.payload.emailValue,
        }
    }
    if (action.type === 'loginPasswordValue') {
    	return {
        	...state,
        	passwordValue: action.payload.passwordValue,
        }
    }
    if (action.type === 'loginFormCheck') {
    	return {
        	...state,
        	errorEmail: action.payload.checkResults.emailErrorStatus,
        	errorPassword: action.payload.checkResults.passwordErrorStatus,
        }
    }
    return state;
}