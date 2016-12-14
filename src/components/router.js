import React, { Component } from 'react';
import App from './app';
import Home from './home';
import Users from './users';
import Detail from './detail';
import {Router, Route, browserHistory } from 'react-router';


const MyRouter = (props) => {
	return(
		<Router history={browserHistory}>
			<Route path='/' component={App} />
			<Route path='/home' component={Home} />	
			<Route path='/users(/:userId)' component={Users} />	
			<Route path='/details(/:videoId)' component={Detail} />	
		</Router>
	)
}
 export default MyRouter