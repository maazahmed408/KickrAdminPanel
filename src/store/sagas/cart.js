import { call, takeLatest, put } from "redux-saga/effects";
import { GET_CART_LIST } from "../types";

import { getCartListSuccess, getCartListFailure } from "../actions";

import { getCartListService } from "../../Services/cart";

export function* getCartListSaga(action) {
	try {
		let res = yield call(getCartListService, action.payload);
		if (res.success) {
			yield put(getCartListSuccess(res.data));
		} else {
			yield put(getCartListFailure(res.message));
		}
	} catch (e) {
		yield put(
			getCartListFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

const cartSaga = () => [takeLatest(GET_CART_LIST.REQUEST, getCartListSaga)];
export default cartSaga();
