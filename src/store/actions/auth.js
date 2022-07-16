import {
	LOGIN_WITH_EMAIL,
	LOGOUT,
	SIGNUP_WITH_EMAIL,
	UPDATE_USER_PROFILE,
} from "../types";

export const loginRequest = (payload) => ({
	type: LOGIN_WITH_EMAIL.REQUEST,
	payload,
});

export const loginSuccess = (payload) => ({
	type: LOGIN_WITH_EMAIL.SUCCESS,
	payload,
});

export const loginFailure = (payload) => ({
	type: LOGIN_WITH_EMAIL.FAILURE,
	payload,
});

export const logoutRequest = (payload) => ({
	type: LOGOUT.REQUEST,
	payload,
});

export const logoutSuccess = (payload) => ({
	type: LOGOUT.SUCCESS,
	payload,
});

export const logoutFailure = (payload) => ({
	type: LOGOUT.FAILURE,
	payload,
});

export const signupRequest = (payload) => ({
	type: SIGNUP_WITH_EMAIL.REQUEST,
	payload,
});

export const signupSuccess = (payload) => ({
	type: SIGNUP_WITH_EMAIL.SUCCESS,
	payload,
});

export const signupFailure = (payload) => ({
	type: SIGNUP_WITH_EMAIL.FAILURE,
	payload,
});

export const updateUserProfileRequest = (payload, token) => ({
	type: UPDATE_USER_PROFILE.REQUEST,
	payload,
	token,
});

export const updateUserProfileSuccess = (payload) => ({
	type: UPDATE_USER_PROFILE.SUCCESS,
	payload,
});

export const updateUserProfileFailure = (payload) => ({
	type: UPDATE_USER_PROFILE.FAILURE,
	payload,
});
