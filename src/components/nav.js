import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';

const Nav = (props) => {
	return(
		<nav className="row">
		<div className="nav-wrapper">
			<a href="#" className="brand-logo">Logo</a>
    	<ul className="right hide-on-med-and-down">
    		<li ><Link to="/">Index</Link></li>
    		<li ><Link to="/home">Home</Link></li>
    		<li ><Link to="/users">User</Link></li>
    	</ul>
    </div>
    </nav>
	)
}

export default Nav