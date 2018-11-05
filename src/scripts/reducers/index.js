import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import MenuTriggerReduser from 'reducers/MenuTrigger';

const rootReducer = combineReducers({
    router:routerReducer,
    menuTrigger: MenuTriggerReduser,
})

export default rootReducer;
