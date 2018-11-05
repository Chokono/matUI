const menuTriggerState = {
	openLeftDraver: false,
}

export default function MenuTriggerReduser(state = menuTriggerState, action) {
    if (action.type === 'menuTrigger') {
        return {
        	openLeftDraver: action.payload.leftDraverStatus,
        }
    }
    return state;
}