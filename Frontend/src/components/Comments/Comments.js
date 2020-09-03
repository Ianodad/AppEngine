import React from "react";
import Moment from "react-moment";

const Comments = ({ comments }) => {
	return (
		<div className='overflow-auto' style={{ maxheight: "600px" }}>
			{comments.map(comment => (
				<div className='card gedf-card mt-2'>
					<div className='card-body'>
						<h5 className='card-title'>{comment.userName}</h5>
						<p className='card-text'>{comment.comment}</p>
					</div>
					<div className='card-footer h-50'>
						<Moment fromNow>{comment.date}</Moment>
					</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
