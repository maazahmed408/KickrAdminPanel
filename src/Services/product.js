import { apiURL } from "../constants";
import axios from "axios";

export const getProductListService = async (token) => {
	try {
		let URL = apiURL + "admin/getProducts";
		let config = {
			headers: {
				Authorization: "Bearer " + token,
			},
		};
		let res = await axios.get(URL, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const getOneProductService = async (data) => {
	try {
		let URL = apiURL + "admin/getProductById/" + data.id;
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.get(URL, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const addProductService = async (data) => {
	try {
		let URL = apiURL + "admin/addProduct";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.post(URL, data.value, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const updateProductService = async (data) => {
	try {
		let URL = apiURL + "admin/updateProduct";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.put(URL, data.value, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};

export const updateProductImageService = async (data) => {
	try {
		let URL = apiURL + "admin/updateMainImage";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.put(URL, data.value, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
