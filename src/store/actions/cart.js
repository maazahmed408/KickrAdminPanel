import { GET_CART_LIST } from "../types";

export const getCartListRequest = (payload) => ({
	type: GET_CART_LIST.REQUEST,
	payload,
});

export const getCartListSuccess = (payload) => ({
	type: GET_CART_LIST.SUCCESS,
	payload,
});

export const getCartListFailure = (payload) => ({
	type: GET_CART_LIST.FAILURE,
	payload,
});
