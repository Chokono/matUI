import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import MenuTriggerReduser from 'reducers/MenuTrigger';
import SignupStateReduser from 'reducers/SignupState';
import LoginStateReduser from 'reducers/LoginState';
import UserStateReduser from 'reducers/UserState';

const rootReducer = combineReducers({
    router:routerReducer,
    menuTrigger: MenuTriggerReduser,
    signupState: SignupStateReduser,
    loginState: LoginStateReduser,
    userState: UserStateReduser,
})

export default rootReducer;
