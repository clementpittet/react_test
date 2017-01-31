import React, { Component } from 'react';
import App from './app';
import Home from './home';
import Users from './users';
import Detail from './detail';
import Map from './map';
import {Router, Route, browserHistory } from 'react-router';


const MyRouter = (props) => {
	return(
		<Router history={browserHistory}>
			<Route name="Home" path='/' component={Home} />
			<Route name="List" path='/list' component={App} />
			<Route name="Detail" path='/details(/:videoId)' component={Detail} />	
			<Route name="User" path='/users(/:userId)' component={Users} />	
			<Route name="Map" path='/map' component={Map} />	
		</Router>
	)
}
 export default MyRouter