import http from "./httpService";
import jwtDecode from "jwt-decode";

import { apiUrl } from "../config";

const apiEndPoint = `${apiUrl}/auth`;
const tokenKey = "token";

http.setJwt(getJwt());

export async function postLogin(username, password) {
	console.log(username);
	const response = await http.post(`${apiEndPoint}/login`, {
		username,
		password
	});
	localStorage.setItem(tokenKey, response.headers["x-auth-token"]);
}

export function logout() {
	localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem(tokenKey);
		return jwtDecode(jwt);
	} catch (ex) {
		return null;
	}
}

export function getJwt() {
	try {
		return localStorage.getItem(tokenKey);
	} catch (error) {
		return null;
	}
}
