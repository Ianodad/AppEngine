import React from "react";

import Input from "../common/Input";
const Login = ({
	username,
	password,
	handleSubmit,
	handleChange,
	errors,
	validate
}) => {
	return (
		<div className='loginForm d-flex  h-100'>
			<div className='col-lg-5 col-xl-3 col-md-6 mx-auto my-auto'>
				<h3 className='display-4 text-light text-center mb-4'>WELCOME</h3>
				<p className='text-muted mb-4 text-center'>
					Key in your credentials to login
				</p>
				<form onSubmit={handleSubmit}>
					<Input
						type='text'
						name='username'
						value={username}
						placeholder='Username'
						error={errors.username}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
					<Input
						type='password'
						name='password'
						value={password}
						placeholder='Password'
						error={errors.password}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
					<button
						disabled={validate()}
						// type='submit'
						className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'
					>
						LogIn
					</button>
				</form>
				<p className="text-center" style={{color:"white"}}>
					Username: <span style={{color:"red"}}><i><u>root</u></i></span> Password: <span style={{color:"red"}}><i><u>rootAdmin</u></i></span>
				</p>
			</div>
		</div>
	);
};

export default Login;
