import { GET_PRODUCT_LIST, ADD_PRODUCT } from "../types";

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
