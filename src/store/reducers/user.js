import { GET_USER_LIST } from "../types";

const userInitialState = {
	userList: [],
	count: 0,
	loading: false,
	error: {},
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case GET_USER_LIST.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_USER_LIST.SUCCESS:
			return {
				...state,
				loading: false,
				userList: action.payload.result,
				count: action.payload.count,
				error: {},
			};
		case GET_USER_LIST.FAILURE:
			return {
				...state,
				loading: false,
				userList: [],
				count: 0,
				error: action.payload.message,
			};

		default:
			return state;
	}
};

export default userReducer;
