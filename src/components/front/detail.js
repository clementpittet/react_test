import React, { Component } from 'react';
import {Router, Route, browserHistory } from 'react-router';

const Detail = (props) => {
	const url = `https://www.youtube.com/v/${props.routeParams.videoId}?rel=0&autoplay=1`
    return (
    	<div className="container">	
    		<div className="">
			    <a className="waves-effect waves-light btn" onClick={browserHistory.goBack}>Back</a>
			  </div>
    		<div className="row center-align">	
    			<iframe  width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
    		</div>	
	   </div>
    )

}
export default Detail