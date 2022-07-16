import { call, takeLatest, put } from "redux-saga/effects";
import {
	GET_CATEGORY_LIST,
	GET_SUBCATEGORY_LIST,
	ADD_SUB_CATEGORY,
	ADD_CATEGORY,
	GET_ONE_CATEGORY,
	UPDATE_CATEGORY,
	UPDATE_SUB_CATEGORY,
} from "../types";
import {
	getCategoryListSuccess,
	getCategoryListFailure,
	getSubCategoryListSuccess,
	getSubCategoryListFailure,
	addSubCategorySuccess,
	addSubCategoryFailure,
	addCategorySuccess,
	addCategoryFailure,
	getOneCategorySuccess,
	getOneCategoryFailure,
	updateCategorySuccess,
	updateCategoryFailure,
	updateSubCategorySuccess,
	updateSubCategoryFailure,
	getCategoryListRequest,
	getSubCategoryListRequest,
} from "../actions";
import {
	getCategoryListService,
	getSubCategoryListService,
	addSubCategoryService,
	addCategoryService,
	getOneCategoryService,
	updateCategoryService,
	updateSubCategoryService,
} from "../../Services/category";

export function* getCategoryListSaga(action) {
	try {
		let res = yield call(getCategoryListService, action.payload);
		if (res.success) {
			yield put(getCategoryListSuccess(res.data));
		} else {
			yield put(getCategoryListFailure(res.message));
		}
	} catch (e) {
		yield put(
			getCategoryListFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* getOneCategorySaga(action) {
	try {
		let res = yield call(getOneCategoryService, action.payload);
		if (res.success) {
			yield put(getOneCategorySuccess(res.data));
		} else {
			yield put(getOneCategoryFailure(res.message));
		}
	} catch (e) {
		yield put(
			getOneCategoryFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* getSubCategoryListSaga(action) {
	try {
		let res = yield call(getSubCategoryListService, action.payload);
		if (res.success) {
			yield put(getSubCategoryListSuccess(res.data));
		} else {
			yield put(getSubCategoryListFailure(res.message));
		}
	} catch (e) {
		yield put(
			getSubCategoryListFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* addSubCategorySaga(action) {
	try {
		let res = yield call(addSubCategoryService, action.payload);
		if (res.success) {
			yield put(addSubCategorySuccess(res.data));
		} else {
			yield put(addSubCategoryFailure(res.message));
		}
	} catch (e) {
		yield put(
			addSubCategoryFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* addCategorySaga(action) {
	try {
		let res = yield call(addCategoryService, action.payload);
		if (res.success) {
			yield put(addCategorySuccess(res.data));
		} else {
			yield put(addCategoryFailure(res.message));
		}
	} catch (e) {
		yield put(
			addCategoryFailure({
				success: false,
				message: e.message,
			})
		);
	}
}

export function* updateCategorySaga(action) {
	try {
		let res = yield call(updateCategoryService, action.payload);
		if (res.success) {
			yield put(updateCategorySuccess(res.data));
			yield put(getCategoryListRequest(action.payload.token));
		} else {
			yield put(updateCategoryFailure(res.message));
		}
	} catch (e) {
		yield put(
			updateCategoryFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
export function* updateSubCategorySaga(action) {
	try {
		let res = yield call(updateSubCategoryService, action.payload);
		if (res.success) {
			yield put(updateSubCategorySuccess(res.data));
			yield put(getSubCategoryListRequest(action.payload.token));
		} else {
			yield put(updateSubCategoryFailure(res.message));
		}
	} catch (e) {
		yield put(
			updateSubCategoryFailure({
				success: false,
				message: e.message,
			})
		);
	}
}
const categorySaga = () => [
	takeLatest(GET_CATEGORY_LIST.REQUEST, getCategoryListSaga),
	takeLatest(GET_SUBCATEGORY_LIST.REQUEST, getSubCategoryListSaga),
	takeLatest(ADD_SUB_CATEGORY.REQUEST, addSubCategorySaga),
	takeLatest(ADD_CATEGORY.REQUEST, addCategorySaga),
	takeLatest(GET_ONE_CATEGORY.REQUEST, getOneCategorySaga),
	takeLatest(UPDATE_CATEGORY.REQUEST, updateCategorySaga),
	takeLatest(UPDATE_SUB_CATEGORY.REQUEST, updateSubCategorySaga),
];
export default categorySaga();
