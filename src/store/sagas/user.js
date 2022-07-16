import { call, takeLatest, put } from "redux-saga/effects";
import { GET_USER_LIST } from "../types";
import { getUserListSuccess, getUserListFailure } from "../actions";
import { getUserListService } from "../../Services/user";

export function* getUserListSaga(action) {
	try {
		let res = yield call(getUserListService, action.payload);
		if (res.success) {
			yield put(getUserListSuccess(res.data));
		} else {
			yield put(getUserListFailure(res.message));
		}
	} catch (e) {
		yield put(
			getUserListFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

const userSaga = () => [takeLatest(GET_USER_LIST.REQUEST, getUserListSaga)];
export default userSaga();
