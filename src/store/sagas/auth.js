import { call, takeLatest, put } from "redux-saga/effects";
import {
	LOGIN_WITH_EMAIL,
	LOGOUT,
	SIGNUP_WITH_EMAIL,
	UPDATE_USER_PROFILE,
} from "../types";
import {
	loginSuccess,
	loginFailure,
	logoutSuccess,
	logoutFailure,
	signupSuccess,
	signupFailure,
	updateUserProfileSuccess,
	updateUserProfileFailure,
	logoutRequest,
} from "../actions";
import {
	loginWithEmailService,
	signUpWithEmailService,
	updateUserProfileService,
} from "../../Services/auth";
export function* loginWithEmailSaga(action) {
	try {
		let res = yield call(loginWithEmailService, action.payload);
		if (res.success) {
			yield put(loginSuccess(res.data));
		} else {
			yield put(loginFailure(res));
		}
	} catch (e) {
		yield put(
			loginFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

export function* signupWithEmailSaga(action) {
	try {
		let res = yield call(signUpWithEmailService, action.payload);
		if (res.success) {
			yield put(signupSuccess(res.data));
		} else {
			yield put(signupFailure(res));
		}
	} catch (e) {
		yield put(
			signupFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

export function* updateUserProfileSaga(action) {
	try {
		let res = yield call(
			updateUserProfileService,
			action.payload,
			action.token
		);
		if (res.success) {
			yield put(updateUserProfileSuccess(res.data));
		} else {
			if (res.logout) {
				yield put(logoutRequest());
			}
			yield put(updateUserProfileFailure(res));
		}
	} catch (e) {
		yield put(
			updateUserProfileFailure({
				success: false,
				message: e,
			})
		);
	}
}

export function* logoutSaga(action) {
	try {
		console.log("Logout Saga Called");
		yield put(logoutSuccess({ message: "successfully logged out" }));
	} catch (e) {
		yield put(logoutFailure(e));
	}
}

const authSaga = () => [
	takeLatest(LOGIN_WITH_EMAIL.REQUEST, loginWithEmailSaga),
	takeLatest(SIGNUP_WITH_EMAIL.REQUEST, signupWithEmailSaga),
	takeLatest(UPDATE_USER_PROFILE.REQUEST, updateUserProfileSaga),
	takeLatest(LOGOUT.REQUEST, logoutSaga),
];
export default authSaga();
