import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';

const Nav = (props) => {
	return(
        <div>
    	<nav>
    		<div className="nav-wrapper">
    			<a href="#" className="brand-logo">Logo</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            	<ul className="right hide-on-med-and-down">
            		<li ><Link to="/">Index</Link></li>
            		<li ><Link to="/list">List</Link></li>
                    <li ><Link to="/users">User</Link></li>
            		<li ><Link to="/map">map</Link></li>
            	</ul>
                <ul className="side-nav" id="mobile-demo">
                    <li ><Link to="/">Index</Link></li>
                    <li ><Link to="/list">List</Link></li>
                    <li ><Link to="/users">User</Link></li>                
                    <li ><Link to="/map">map</Link></li>                
                </ul>
            </div>
        </nav>
        </div>
	)
}

export default Nav