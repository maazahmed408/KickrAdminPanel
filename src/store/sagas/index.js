import { all } from "redux-saga/effects";
import auth from "./auth";
import user from "./user";
import category from "./category";
import product from "./product";
import cart from "./cart";

const sagas = [...auth, ...user, ...category, ...product, ...cart];

export function* rootSaga() {
	yield all(sagas);
}
