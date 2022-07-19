import { call, takeLatest, put } from "redux-saga/effects";
import {
	GET_PRODUCT_LIST,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	GET_ONE_PRODUCT,
	UPDATE_PRODUCT_IMAGE,
} from "../types";

import {
	getProductListSuccess,
	getProductListFailure,
	addProductSuccess,
	addProductFailure,
	updateProductSuccess,
	updateProductFailure,
	getOneProductSuccess,
	getOneProductFailure,
	updateProductImageSuccess,
	updateProductImageFailure,
	getProductListRequest,
} from "../actions";

import {
	getProductListService,
	addProductService,
	updateProductService,
	getOneProductService,
	updateProductImageService,
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
			yield put(getProductListRequest(action.payload.token));
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
export function* updateProductSaga(action) {
	try {
		let res = yield call(updateProductService, action.payload);
		if (res.success) {
			yield put(updateProductSuccess(res.data));
		} else {
			yield put(updateProductFailure(res.message));
		}
	} catch (e) {
		yield put(
			updateProductFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* getOneProductSaga(action) {
	try {
		let res = yield call(getOneProductService, action.payload);
		if (res.success) {
			yield put(getOneProductSuccess(res.data));
		} else {
			yield put(getOneProductFailure(res.message));
		}
	} catch (e) {
		yield put(
			getOneProductFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* updateProductImageSaga(action) {
	try {
		let res = yield call(updateProductImageService, action.payload);
		if (res.success) {
			yield put(updateProductImageSuccess(res.data));
		} else {
			yield put(updateProductImageFailure(res.message));
		}
	} catch (e) {
		yield put(
			updateProductImageFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

const productSaga = () => [
	takeLatest(GET_PRODUCT_LIST.REQUEST, getProductListSaga),
	takeLatest(ADD_PRODUCT.REQUEST, addProductSaga),
	takeLatest(UPDATE_PRODUCT.REQUEST, updateProductSaga),
	takeLatest(GET_ONE_PRODUCT.REQUEST, getOneProductSaga),
	takeLatest(UPDATE_PRODUCT_IMAGE.REQUEST, updateProductImageSaga),
];
export default productSaga();
