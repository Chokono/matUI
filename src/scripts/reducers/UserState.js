const userState = {
	email: '',
	name: '',
	surname: '',
	gender: '',
	imageUrl: '',
	facebookImageUrl: '',
	vkImageUrl: '',
	auth: false,
}

export default function UserStateReduser(state = userState, action) {
	if (action.type === 'setUser') {
        return {
        	email: action.payload.user.email,
			name: action.payload.user.name,
			surname: action.payload.user.surname,
			gender: action.payload.user.gender,
			imageUrl: action.payload.user.imageUrl,
			facebookImageUrl: action.payload.user.facebookImageUrl,
			vkImageUrl: action.payload.user.vkImageUrl,
			auth: true,
        }
    }
	return state;
}