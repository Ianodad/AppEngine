import React from "react";

// Input reuseable components

const Input = ({ name, type, value, handleChange, placeholder, error }) => {
	return (
		<div className='form-group mb-3 pb-2'>
			<input
				autoFocus
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className='form-control rounded-pill border-0 shadow-sm px-4'
			/>
			<div className='error text-danger text-center'>
				<em>{error}</em>
			</div>
		</div>
	);
};

export default Input;
