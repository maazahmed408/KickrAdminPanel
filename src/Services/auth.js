import { apiURL } from "../constants";
import axios from "axios";

export const signUpWithEmailService = async (data) => {
	try {
		console.log("Inside signup service data = ", data);
		let URL = apiURL + "admin/signup";
		console.log("API URL endpoint = ", URL);
		let res = await axios.post(URL, data);

		return res;
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};

export const loginWithEmailService = async (data) => {
	try {
		console.log("Inside login service data = ", data);
		let URL = apiURL + "admin/login";
		console.log("API URL endpoint = ", URL);
		let res = await axios.post(URL, data);
		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};

export const updateUserProfileService = async (data, token) => {
	try {
		let URL = apiURL + "api/v1/user/profile/";
		let config = {
			headers: {
				"x-auth-token": token,
			},
		};
		let res = await axios.put(URL, data, config);

		return res;
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
