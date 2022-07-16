import { apiURL } from "../constants";
import axios from "axios";

export const getUserListService = async (token) => {
	try {
		let URL = apiURL + "admin/getUsers";
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
