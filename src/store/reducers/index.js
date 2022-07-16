import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth";
import userReducer from "./user";
import categoryReducer from "./catgory";
import productReducer from "./product";
import cartReducer from "./cart";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = () =>
	combineReducers({
		auth: authReducer,
		user: userReducer,
		category: categoryReducer,
		product: productReducer,
		cart: cartReducer,
	});

export default persistReducer(persistConfig, rootReducer());
