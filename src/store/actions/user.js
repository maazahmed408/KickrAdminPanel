import { GET_USER_LIST } from "../types";

export const getUserListRequest = (payload) => ({
	type: GET_USER_LIST.REQUEST,
	payload,
});

export const getUserListSuccess = (payload) => ({
	type: GET_USER_LIST.SUCCESS,
	payload,
});

export const getUserListFailure = (payload) => ({
	type: GET_USER_LIST.FAILURE,
	payload,
});
