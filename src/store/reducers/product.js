import {
	GET_PRODUCT_LIST,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	GET_ONE_PRODUCT,
	UPDATE_PRODUCT_IMAGE,
} from "../types";

const productInitialState = {
	productList: [],
	selectedProduct: {},
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
		case UPDATE_PRODUCT.REQUEST:
			return {
				...state,
				loading: true,
			};

		case UPDATE_PRODUCT.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_PRODUCT.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case GET_ONE_PRODUCT.REQUEST:
			return {
				...state,
				loading: true,
			};

		case GET_ONE_PRODUCT.SUCCESS:
			return {
				...state,
				loading: false,
				selectedProduct: action.payload,
				error: {},
			};
		case GET_ONE_PRODUCT.FAILURE:
			return {
				...state,
				loading: false,
				selectedProduct: {},
				error: action.payload.message,
			};
		case UPDATE_PRODUCT_IMAGE.REQUEST:
			return {
				...state,
				loading: true,
			};

		case UPDATE_PRODUCT_IMAGE.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_PRODUCT_IMAGE.FAILURE:
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
