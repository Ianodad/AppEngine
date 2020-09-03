import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

class index extends Component {
	render() {
		const { user } = this.props;
		return (
			<div className='container-fluid'>
				<Navbar user={user} />
			</div>
		);
	}
}

export default index;
