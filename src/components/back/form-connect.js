import React, { Component } from 'react'
import {Router, Route, browserHistory } from 'react-router'

const usersList = []

export default class FormConnect extends Component {
	constructor(props){
		super(props)
		this.state = {
			email : '',
			pass : '',
			users : []
		}
		this.handleChange = this.handleChange.bind(this)
		this.onConnect = this.onConnect.bind(this)
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

  handleChange(e){
  	if ('name' == e.target.id) {
			this.setState({
				email : e.target.value
			})
  	}else{
			this.setState({
				pass : e.target.value
			})
  	}
  }

  onConnect(e){
  	e.preventDefault()
  	console.log('toto');

  }

	render() {
    return (
    	<div className="row">
	    	<form onSubmit={this.onConnect} className="row col s12 valign-wrapper">
	    		<div className=" col s8">
	    			<div className="input-field valign">	
				    	<input type="text" onChange={this.handleChange}  id="name"></input>
				    	<label htmlFor="search">Name</label>
			    	</div>
			    </div>
			    <div className=" col s8">
	    			<div className="input-field valign">	
				    	<input type="password" onChange={this.handleChange}  id="password"></input>
				    	<label htmlFor="search">Password</label>
			    	</div>
			    </div>
			    <div className="valign col s4">
			    	<button className="btn waves-effect waves-light" type="submit" name="action">Connect</button>
			    </div>
		    </form>
		   </div>
    );
  }

}