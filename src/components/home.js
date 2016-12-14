import React, { Component } from 'react';
import Nav from './nav';
import {Router, Route, browserHistory } from 'react-router';

const Home = (props) =>{
	return(
		<div className="container"> 
			<Nav />
			<h1>welcome to home</h1>
		</div>
	)
}

export default Home