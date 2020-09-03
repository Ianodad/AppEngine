import http from "./httpService";

import {apiUrl} from "../config";
const apiEndPoint = `${apiUrl}/comments`;


export function getAllComments() {
	return http.get(apiEndPoint);
}