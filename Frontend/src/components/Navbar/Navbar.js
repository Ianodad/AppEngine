import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
	return (
		<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
			<button
				className='navbar-toggler'
				type='button'
				data-target='#navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav'>
					{!user && (
						<li className='nav-item active'>
							<Link to='/' className='nav-link'>
								Login
							</Link>
						</li>
					)}
					<li className='nav-item'>
						<Link to='/movies' className='nav-link'>
							Movies
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='./register' className='nav-link'>
							Register
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link'>
							About
						</Link>
					</li>
					{user && (
						<React.Fragment>
							<li className='nav-item'>
								<div className='nav-link'>
									<span className='text-success text-uppercase mr-1'>
										{user.username}
									</span>
									logged in
								</div>
							</li>
							<li className='nav-item'>
								<Link to='/logout' className='nav-link'>
									Logout
								</Link>
							</li>
						</React.Fragment>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
