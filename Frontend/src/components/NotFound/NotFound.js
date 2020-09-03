import React from "react";
import "./NotFound.css";

function NotFound() {
	return (
		<div className='container-fluid notfound' style={{ height: "100vh" }}>
			<div class='error-header'> </div>
			<div class='container '>
				<section class='error-container text-center'>
					<h1>404</h1>
					<div class='error-divider'>
						<h2>PAGE NOT FOUND.</h2>
						<p class='description'>We Couldn't Find This Page</p>
					</div>
					<a href='#index.html' class='return-btn'>
						<i class='fa fa-home'></i>Home
					</a>
				</section>
			</div>
		</div>
	);
}

export default NotFound;
