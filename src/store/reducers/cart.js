import { GET_CART_LIST } from "../types";

const cartInitialState = {
	productList: [],
	loading: false,
	error: {},
};

const productReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case GET_CART_LIST.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_CART_LIST.SUCCESS:
			return {
				...state,
				loading: false,
				productList: action.payload,
				error: {},
			};
		case GET_CART_LIST.FAILURE:
			return {
				...state,
				loading: false,
				productList: [],
				error: action.payload.message,
			};

		default:
			return state;
	}
};

export default productReducer;
