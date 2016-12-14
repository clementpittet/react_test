import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';

const ListItem = (props) => {
	const snippet = props.video.snippet
	const videoId = props.video.id.videoId
	const img = snippet.thumbnails.default.url
	const title = snippet.title
	const desc = snippet.description

	return(
		<div className="list-item">
			<Link to={`/details/${videoId}`}><img src={img} alt="" /></Link>
			<div className="wrapper-content">
				<span className="title">{title}</span>
				<span>{desc}</span>
			</div>
		</div>
	)
}

export default class List extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedItem : 0
		}
	}

	render() {
		return (
			<div>
					{
						this.props.videos.map((video, idx) => {
							return (
								<ListItem key={idx} video={video}/>
							)							
						})
					}
			</div>
		);
	}
}
