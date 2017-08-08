import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';

const Nav = (props) => {
	return(
        <div>
    	<nav className=" blue-grey">
    		<div className="nav-wrapper">
                <Link to="/user" className="brand-logo">Logo</Link>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            	<ul className="right hide-on-med-and-down">
            		<li ><Link to="/user">Index</Link></li>
            	</ul>
                <ul className="side-nav" id="mobile-demo">
                    <li ><Link to="/user">Index</Link></li>
                </ul>
            </div>
        </nav>
        </div>
	)
}

export default Nav