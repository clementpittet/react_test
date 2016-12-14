import React, { Component } from 'react';
import Nav from './nav'
import {Router, Route, browserHistory } from 'react-router';

const Users = (props) =>{
	return(
		<div className="container"> 
			<Nav />
			<h1>Hello : {props.routeParams.userId}</h1>
		</div>
	)
}

export default Users