import React, { Component } from 'react';
import Template from './template';
import TemplateBack from './template-back';
import NotFound from './inc/notfound';
/*Front element*/
import VideoList from './front/video-list';
import Home from './front/home';
import Users from './front/users';
import Detail from './front/detail';
import Map from './front/map';
/* Back element */
import LoginBack from './back/login';
import {Router, Route, browserHistory } from 'react-router';


const MyRouter = (props) => {
	return(
		<Router history={browserHistory}>
			<Route component={TemplateBack}>
				<Route name="User" path='/user' component={LoginBack}/>
			</Route>
			<Route component={Template}>
				<Route name="Home" path='/' component={Home} />
				<Route name="List" path='/list' component={VideoList} />
				<Route name="Detail" path='/details(/:videoId)' component={Detail} />	
				<Route name="User" path='/users(/:userId)' component={Users} />	
				<Route name="Map" path='/map' component={Map} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	)
}

export default MyRouter