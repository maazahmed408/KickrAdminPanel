import {
	GET_CATEGORY_LIST,
	GET_SUBCATEGORY_LIST,
	ADD_CATEGORY,
	ADD_SUB_CATEGORY,
	GET_ONE_CATEGORY,
	UPDATE_CATEGORY,
	UPDATE_SUB_CATEGORY,
	DELETE_SUB_CATEGORY,
	DELETE_CATEGORY,
	UPDATE_CAT_ICON,
	UPDATE_SUB_CAT_ICON,
} from "../types";

const categoryInitialState = {
	categoryList: [],
	selectedCategory: [],
	subCategoryList: [],
	loading: false,
	error: {},
};

const categoryReducer = (state = categoryInitialState, action) => {
	switch (action.type) {
		case GET_CATEGORY_LIST.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_CATEGORY_LIST.SUCCESS:
			return {
				...state,
				loading: false,
				categoryList: action.payload,
				error: {},
			};
		case GET_CATEGORY_LIST.FAILURE:
			return {
				...state,
				loading: false,
				categoryList: [],
				error: action.payload.message,
			};
		case GET_ONE_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_ONE_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				selectedCategory: action.payload,
				error: {},
			};
		case GET_ONE_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				selectedCategory: [],
				error: action.payload.message,
			};
		case GET_SUBCATEGORY_LIST.REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_SUBCATEGORY_LIST.SUCCESS:
			return {
				...state,
				loading: false,
				subCategoryList: action.payload,
				error: {},
			};
		case GET_SUBCATEGORY_LIST.FAILURE:
			return {
				...state,
				loading: false,
				subCategoryList: [],
				error: action.payload.message,
			};
		case ADD_SUB_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_SUB_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case ADD_SUB_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case ADD_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case ADD_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case UPDATE_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case UPDATE_SUB_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_SUB_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_SUB_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case DELETE_SUB_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case DELETE_SUB_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case DELETE_SUB_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case DELETE_CATEGORY.REQUEST:
			return {
				...state,
				loading: true,
			};
		case DELETE_CATEGORY.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case DELETE_CATEGORY.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case UPDATE_CAT_ICON.REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_CAT_ICON.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_CAT_ICON.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};
		case UPDATE_SUB_CAT_ICON.REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_SUB_CAT_ICON.SUCCESS:
			return {
				...state,
				loading: false,
				error: {},
			};
		case UPDATE_SUB_CAT_ICON.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		default:
			return state;
	}
};

export default categoryReducer;
