import {
	GET_CATEGORY_LIST,
	GET_SUBCATEGORY_LIST,
	ADD_CATEGORY,
	ADD_SUB_CATEGORY,
	GET_ONE_CATEGORY,
	UPDATE_CATEGORY,
	DELETE_CATEGORY,
	DELETE_SUB_CATEGORY,
	UPDATE_SUB_CATEGORY,
	UPDATE_CAT_ICON,
	UPDATE_SUB_CAT_ICON,
} from "../types";

export const getCategoryListRequest = (payload) => ({
	type: GET_CATEGORY_LIST.REQUEST,
	payload,
});

export const getCategoryListSuccess = (payload) => ({
	type: GET_CATEGORY_LIST.SUCCESS,
	payload,
});

export const getCategoryListFailure = (payload) => ({
	type: GET_CATEGORY_LIST.FAILURE,
	payload,
});
export const getOneCategoryRequest = (payload) => ({
	type: GET_ONE_CATEGORY.REQUEST,
	payload,
});

export const getOneCategorySuccess = (payload) => ({
	type: GET_ONE_CATEGORY.SUCCESS,
	payload,
});

export const getOneCategoryFailure = (payload) => ({
	type: GET_ONE_CATEGORY.FAILURE,
	payload,
});
export const getSubCategoryListRequest = (payload) => ({
	type: GET_SUBCATEGORY_LIST.REQUEST,
	payload,
});

export const getSubCategoryListSuccess = (payload) => ({
	type: GET_SUBCATEGORY_LIST.SUCCESS,
	payload,
});

export const getSubCategoryListFailure = (payload) => ({
	type: GET_SUBCATEGORY_LIST.FAILURE,
	payload,
});
export const addCategoryRequest = (payload) => ({
	type: ADD_CATEGORY.REQUEST,
	payload,
});

export const addCategorySuccess = (payload) => ({
	type: ADD_CATEGORY.SUCCESS,
	payload,
});

export const addCategoryFailure = (payload) => ({
	type: ADD_CATEGORY.FAILURE,
	payload,
});
export const addSubCategoryRequest = (payload) => ({
	type: ADD_SUB_CATEGORY.REQUEST,
	payload,
});

export const addSubCategorySuccess = (payload) => ({
	type: ADD_SUB_CATEGORY.SUCCESS,
	payload,
});

export const addSubCategoryFailure = (payload) => ({
	type: ADD_SUB_CATEGORY.FAILURE,
	payload,
});

export const updateCategoryRequest = (payload) => ({
	type: UPDATE_CATEGORY.REQUEST,
	payload,
});

export const updateCategorySuccess = (payload) => ({
	type: UPDATE_CATEGORY.SUCCESS,
	payload,
});

export const updateCategoryFailure = (payload) => ({
	type: UPDATE_CATEGORY.FAILURE,
	payload,
});
export const updateSubCategoryRequest = (payload) => ({
	type: UPDATE_SUB_CATEGORY.REQUEST,
	payload,
});

export const updateSubCategorySuccess = (payload) => ({
	type: UPDATE_SUB_CATEGORY.SUCCESS,
	payload,
});

export const updateSubCategoryFailure = (payload) => ({
	type: UPDATE_SUB_CATEGORY.FAILURE,
	payload,
});
export const deleteCategoryRequest = (payload) => ({
	type: DELETE_CATEGORY.REQUEST,
	payload,
});

export const deleteCategorySuccess = (payload) => ({
	type: DELETE_CATEGORY.SUCCESS,
	payload,
});

export const deleteCategoryFailure = (payload) => ({
	type: DELETE_CATEGORY.FAILURE,
	payload,
});
export const deleteSubCategoryRequest = (payload) => ({
	type: DELETE_SUB_CATEGORY.REQUEST,
	payload,
});

export const deleteSubCategorySuccess = (payload) => ({
	type: DELETE_SUB_CATEGORY.SUCCESS,
	payload,
});

export const deleteSubCategoryFailure = (payload) => ({
	type: DELETE_SUB_CATEGORY.FAILURE,
	payload,
});
export const updateCatIconRequest = (payload) => ({
	type: UPDATE_CAT_ICON.REQUEST,
	payload,
});

export const updateCatIconSuccess = (payload) => ({
	type: UPDATE_CAT_ICON.SUCCESS,
	payload,
});

export const updateCatIconFailure = (payload) => ({
	type: UPDATE_CAT_ICON.FAILURE,
	payload,
});
export const updateSubCatIconRequest = (payload) => ({
	type: UPDATE_SUB_CAT_ICON.REQUEST,
	payload,
});

export const updateSubCatIconSuccess = (payload) => ({
	type: UPDATE_SUB_CAT_ICON.SUCCESS,
	payload,
});

export const updateSubCatIconFailure = (payload) => ({
	type: UPDATE_SUB_CAT_ICON.FAILURE,
	payload,
});
