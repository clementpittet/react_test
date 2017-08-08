import React, { Component } from 'react';
import {Router, Route, browserHistory } from 'react-router';
import FormConnect from './form-connect'


export default class LoginBack extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
			<div className="container"> 
				<span className="title">Connexion</span>
				<FormConnect />
			</div>
		</div>
		);
	}
}
