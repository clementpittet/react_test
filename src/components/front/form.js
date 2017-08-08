import React, { Component } from 'react';

export default class Myform extends Component {
	constructor(props){
		super(props)
		this.state = {
			term : 'default'
		}
		this.handleChange = this.handleChange.bind(this)
	}

	render() {
    return (
    	<div className="row">
	    	<form onSubmit={this.props.onSearch.bind(this, this.state.term)} className="row col s12 valign-wrapper">
	    		<div className=" col s8">
	    			<div className="input-field valign">	
				    	<input type="text" onChange={this.handleChange}  id="search"></input>
				    	<label htmlFor="search">Rechercher</label>
			    	</div>
			    </div>
			    <div className="valign col s4">
			    	<button className="btn waves-effect waves-light" type="submit" name="action">Search</button>
			    </div>
		    </form>
		   </div>
    );
  }

  handleChange(e){
  	this.setState({
  		term : e.target.value
  	});
  }
}