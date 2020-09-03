import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
import { getMovie } from "../../services/movieService";
import "./MovieDetail.css";
import Comments from "../Comments";

class index extends Component {
	state = {
		movie: {}
	};
	async componentDidMount() {
		const movieId = this.props.match.params.id;
		const { data: result } = await getMovie(movieId);
		const movie = result[0];
		this.setState({ movie });
	}

	render() {
		const { movie } = this.state;
		const { user } = this.props;
		return (
			<div className='container-fluid movieDetail'>
				<MovieDetails movie={movie} />
				<div className='mx-auto' style={{maxWidth:"800px"}}>
					<Comments movieId={this.props.match.params.id} user={user} />
				</div>
			</div>
		);
	}
}

export default index;
