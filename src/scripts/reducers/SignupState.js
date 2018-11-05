const signupState = {
	genderValue: 'male',
	errorEmail: false,
	errorPassword: false,
	emailValue: '',
	passwordValue: '',
	confirmPasswordValue: '',
}

export default function SignupStateReduser(state = signupState, action) {
    if (action.type === 'signupState') {
        return {
        	...state,
        	genderValue: action.payload.genderValue,
        }
    }
    if (action.type === 'signupEmailValue') {
    	return {
        	...state,
        	emailValue: action.payload.emailValue,
        }
    }
    if (action.type === 'signupPasswordValue') {
    	return {
        	...state,
        	passwordValue: action.payload.passwordValue,
        }
    }
    if (action.type === 'signupConfirmPasswordValue') {
    	return {
        	...state,
        	confirmPasswordValue: action.payload.confirmPasswordValue,
        }
    }
    if (action.type === 'signupFormCheck') {
    	return {
        	...state,
        	errorEmail: action.payload.checkResults.emailErrorStatus,
        	errorPassword: action.payload.checkResults.passwordErrorStatus,
        }
    }
    return state;
}