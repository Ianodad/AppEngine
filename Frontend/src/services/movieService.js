import http from "./httpService";

import { apiUrl } from "../config";

const apiEndPoint = `${apiUrl}/movies`;

export function getMovies() {
	return http.get(apiEndPoint);
}

export function getMovie(id) {
	return http.get(`${apiEndPoint}/${id}`);
}

export async function  getComments (id) {
	console.log("got this far");
	console.log(await http.get(`${apiEndPoint}/${id}/comments`))
	return await http.get(`${apiEndPoint}/${id}/comments`);
}

export function postComment(movieId, comment, username) {
	console.log(username);
	return http.post(`${apiEndPoint}/${movieId}/comment`, {
		movieId,
		comment,
		username
	});
}
