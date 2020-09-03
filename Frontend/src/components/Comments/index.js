import React, { Component } from "react";
import Comment from "./Comment";
import "./Comments.css";
import Comments from "./Comments";
import { getComments, postComment } from "../../services/movieService";
import { getCurrentUser } from "../../services/authService";

class index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: "",
			comments: [],
			movieId: this.props.movieId
		};
	}

	async populateComments() {
		const { data: results } = await getComments(this.state.movieId);
		const comments = results.reverse();
		this.setState({ comments });
	}

	async componentDidMount() {
		await this.populateComments();
	}

	handleSubmit = async e => {
		e.preventDefault();

		try {
			const { movieId, comment } = this.state;
			const { user } = await getCurrentUser();
			console.log(user.username);
			const posted = await postComment(movieId, comment, user.username);
			console.log(posted);
			const refreshComment = "";
			this.setState({ comment: refreshComment });

			await this.populateComments();
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log(ex.response.data);
			}
		}
	};

	handleChange = ({ currentTarget: input }) => {
		let comment = this.state.comment;
		comment = input.value;
		console.log(comment);
		this.setState({ comment });
	};

	render() {
		const { comment, comments } = this.state;
		return (
			<div className='container mx-auto mt-4 comments'>
				<Comment
					comment={comment}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<Comments comments={comments} />
			</div>
		);
	}
}

export default index;
