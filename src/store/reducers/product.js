import { GET_PRODUCT_LIST, ADD_PRODUCT } from "../types";

const productInitialState = {
	productList: [],
	loading: false,
	error: {},
};

const productReducer = (state = productInitialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_LIST.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_PRODUCT_LIST.SUCCESS:
			return {
				...state,
				loading: false,
				productList: action.payload,
				error: {},
			};
		case GET_PRODUCT_LIST.FAILURE:
			return {
				...state,
				loading: false,
				productList: [],
				error: action.payload.message,
			};
		case ADD_PRODUCT.REQUEST:
			return {
				...state,
				loading: true,
			};

		case ADD_PRODUCT.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case ADD_PRODUCT.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		default:
			return state;
	}
};

export default productReducer;
