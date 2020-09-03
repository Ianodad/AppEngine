import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "moment-timezone";
// component extractions
import Login from "./components/Login";
import Logout from "./components/Logout";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import ProtectedRoute from "./components/ProtectedRoute";

import { getCurrentUser } from "./services/authService";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
	state = {};

	componentDidMount() {
		const user = getCurrentUser();
		this.setState({ user });
	}

	render() {
		const { user } = this.state;
		return (
			<div>
				<ToastContainer />
				<Navbar user={user} />
				<main className='container-fluid'>
					<Switch>
						<ProtectedRoute path='/movies/:id' component={MovieDetails} />
						<ProtectedRoute path='/movies' component={Movies} />
						<Route path='/not-found' component={NotFound}></Route>
						<Route path='/' exact component={Login}></Route>
						<Route path='/logout' exact component={Logout}></Route>
						<Redirect to='/not-found' />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
