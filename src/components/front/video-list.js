import React, { Component } from 'react'
import Myform from './form'
import List from './list'
import axios from 'axios'
import {Router, Route, browserHistory, Link } from 'react-router';

const searchList = 'search'
const baseUrl = `https://www.googleapis.com/youtube/v3/${searchList}`
const apiKey = 'AIzaSyDszdZq1uImMniMJiVwROrZAFy8zfqaQkI'
const term = 'reactJS'

export default class VideoList extends Component {
	constructor(props){
		super(props)
		this.state = {
			url : `${baseUrl}?q=${term}&part=snippet&key=${apiKey}&type=video`,
			videos : []
		}
		this.onSearch = this.onSearch.bind(this)
	}

	componentWillMount(){
		axios.get(this.state.url)
		.then(({data}) => {
			const videos = data.items
			this.setState({
				videos
			});
		})
		.catch(console.log)
	}

  render() {
    return (
      <div className="container"> 
      	<Myform onSearch={this.onSearch} />
      	<List videos={this.state.videos} />
      </div>
    );
  }

  onSearch(term, e){
  	e.preventDefault()
  	this.setState({
  		url: `${baseUrl}?q=${term}&part=snippet&key=${apiKey}&type=video`
  	}, () => {
	  	axios.get(this.state.url)
			.then(({data}) => {
				const videos = data.items
				this.setState({
					videos
				});
			})
			.catch(console.log)
  	})
  }

 
}
