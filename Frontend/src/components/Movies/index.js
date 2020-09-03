import React, { Component } from "react";
import Movies from "./Movies";
import "./Movies.css";

import { getMovies } from "../../services/movieService";
class index extends Component {
	state = { movies: [] };

	async componentDidMount() {
		const { data: results } = await getMovies();
		const movies = results;
		this.setState({ movies });
	}

	render() {
		const { movies } = this.state;
		return (
			<div>
				<Movies movies={movies} />
			</div>
		);
	}
}

export default index;
