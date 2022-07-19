import {
	GET_PRODUCT_LIST,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	GET_ONE_PRODUCT,
	UPDATE_PRODUCT_IMAGE,
} from "../types";

export const getProductListRequest = (payload) => ({
	type: GET_PRODUCT_LIST.REQUEST,
	payload,
});

export const getProductListSuccess = (payload) => ({
	type: GET_PRODUCT_LIST.SUCCESS,
	payload,
});

export const getProductListFailure = (payload) => ({
	type: GET_PRODUCT_LIST.FAILURE,
	payload,
});

export const addProductRequest = (payload) => ({
	type: ADD_PRODUCT.REQUEST,
	payload,
});

export const addProductSuccess = (payload) => ({
	type: ADD_PRODUCT.SUCCESS,
	payload,
});

export const addProductFailure = (payload) => ({
	type: ADD_PRODUCT.FAILURE,
	payload,
});
export const updateProductRequest = (payload) => ({
	type: UPDATE_PRODUCT.REQUEST,
	payload,
});

export const updateProductSuccess = (payload) => ({
	type: UPDATE_PRODUCT.SUCCESS,
	payload,
});

export const updateProductFailure = (payload) => ({
	type: UPDATE_PRODUCT.FAILURE,
	payload,
});
export const getOneProductRequest = (payload) => ({
	type: GET_ONE_PRODUCT.REQUEST,
	payload,
});

export const getOneProductSuccess = (payload) => ({
	type: GET_ONE_PRODUCT.SUCCESS,
	payload,
});

export const getOneProductFailure = (payload) => ({
	type: GET_ONE_PRODUCT.FAILURE,
	payload,
});
export const updateProductImageRequest = (payload) => ({
	type: UPDATE_PRODUCT_IMAGE.REQUEST,
	payload,
});

export const updateProductImageSuccess = (payload) => ({
	type: UPDATE_PRODUCT_IMAGE.SUCCESS,
	payload,
});

export const updateProductImageFailure = (payload) => ({
	type: UPDATE_PRODUCT_IMAGE.FAILURE,
	payload,
});
