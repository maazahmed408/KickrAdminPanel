import { call, takeLatest, put } from "redux-saga/effects";
import { GET_PRODUCT_LIST, ADD_PRODUCT } from "../types";

import {
	getProductListSuccess,
	getProductListFailure,
	addProductSuccess,
	addProductFailure,
} from "../actions";

import {
	getProductListService,
	addProductService,
} from "../../Services/product";

export function* getProductListSaga(action) {
	try {
		let res = yield call(getProductListService, action.payload);
		if (res.success) {
			yield put(getProductListSuccess(res.data));
		} else {
			yield put(getProductListFailure(res.message));
		}
	} catch (e) {
		yield put(
			getProductListFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

export function* addProductSaga(action) {
	try {
		let res = yield call(addProductService, action.payload);
		if (res.success) {
			yield put(addProductSuccess(res.data));
		} else {
			yield put(addProductFailure(res.message));
		}
	} catch (e) {
		yield put(
			addProductFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

const productSaga = () => [
	takeLatest(GET_PRODUCT_LIST.REQUEST, getProductListSaga),
	takeLatest(ADD_PRODUCT.REQUEST, addProductSaga),
];
export default productSaga();
