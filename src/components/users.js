import React, { Component } from 'react';
import Nav from './nav'
import {Router, Route, browserHistory } from 'react-router';

export default class Users extends Component {
	constructor(props){
		super(props)
		this.state = {
			users : []
		}
		this.getUsers = this.getUsers.bind(this)
	}

	componentWillMount = () =>{
		window.firebase.database().ref('users').once('value')
	  	.then(snapshot => {
	  		const s = snapshot.val()
				this.setState({
					users : s
				})
	  })
	}

	getUsers = () =>{
	}

	render(){
		return(
			<div className="container"> 
				<Nav />
				<span className="title">List of users with firebase</span>
				<ul className="collection">
				{
						this.state.users.map((user, idx) => {
							return (
								<li className="collection-item avatar" key={idx}>
									<span className="title">{user.name}</span>
									<p>{user.firstname}</p>
									<a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
								</li>
							)							
						})
				}
				</ul>
			</div>
		)
	}
}