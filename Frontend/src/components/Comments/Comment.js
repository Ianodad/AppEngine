import React from "react";

const Comment = ({ comment, handleSubmit, handleChange }) => {
	return (
		<div className='comment-form'>
			<form onSubmit={handleSubmit}>
				<button
					disabled={!comment}
					type='submit'
					className='btn btn-primary btn-md my-2'
				>
					Post
				</button>
				<div className='form-group'>
					<textarea
						type='text'
						name='comment'
						value={comment}
						id='comment'
						placeholder='Comment here'
						className='form-control'
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default Comment;
