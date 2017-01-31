import React, { Component } from 'react'
import axios from 'axios'
import Nav from './nav'
import {Router, Route, browserHistory, Link } from 'react-router'

export default class Map extends Component {  
  constructor(props){
    super(props)
    this.state = {
      url : "http://api.geonames.org/postalCodeSearchJSON?postalcode=&country=FR&username=clement.pittet&placename=Paris",
      term : "Paris",
      markers : [],
      gmMarkers : [],
      map : ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.setValue = this.setValue.bind(this)
    this.setMarkers = this.setMarkers.bind(this)
  }

  handleChange(e){
    this.setState({
      term : e.target.value,
    })
  }

  onSearch(term, e){
    e.preventDefault()
    const newUrl = "http://api.geonames.org/postalCodeSearchJSON?country=FR&username=clement.pittet&placename=" + this.state.term
    this.setState({
      url: newUrl
    })
    this.setValue(newUrl)
  }

  setValue(url){
    console.log(url);
    axios.get(url)
    .then(({data}) => {
      const markers = data.postalCodes
      this.setMarkers(markers, this.state.map)    
      this.setState({
        markers
      });    
    })
    .catch(console.log)    
  }

  setMarkers(markers, map){
     if (this.state.gmMarkers.length != 0) {
      this.state.gmMarkers.map((gmMarker, idx) => {      
        gmMarker.setMap(null)
      })
    }
    const newmarker = [],
          infowindows = [],
          bounds = new google.maps.LatLngBounds()

    markers.map((marker, idx) => {
      const latLong = {lat : marker.lat, lng : marker.lng}
            
      const gmMarker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: marker.placeName
      });
      const infowindow = new google.maps.InfoWindow({
        content: marker.placeName
      });

      gmMarker.addListener('click', function() {
        if (infowindows.length != 0) {
          infowindows.map((info, idx) => {
            info.close()
          })
        }
        infowindows.push(infowindow);
        infowindow.open(map, gmMarker);
      });

      newmarker.push(gmMarker)
      bounds.extend(gmMarker.getPosition())
    })
    map.fitBounds(bounds);
    this.setState({
      gmMarkers : newmarker
    });
  }

  componentDidMount = () =>{
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.227638, lng: 2.213749},
      scrollwheel: false,
      zoom: 5,
      maxZoom : 11
    });   
    this.setState({
      map
    }); 
    this.setValue(this.state.url)
  }
  
  componentWillUpdate = (nextProps, nextState) =>{
   
  }

  render(){
    return(
      <div className="container"> 
        <Nav />
        <h3>Map</h3>
        <form onSubmit={this.onSearch.bind(this, this.state.term)} className="row col s12 valign-wrapper">
          <div className=" col s8">
            <div className="input-field valign">  
              <input onChange={this.handleChange } type="text"  id="search"></input>
              <label htmlFor="search">Rechercher</label>
            </div>
            <div>{this.state.markers.length}</div>
          </div>
          <div className="valign col s4">
            <button className="btn waves-effect waves-light" type="submit" name="action">Search</button>
          </div>
        </form>
        <div id="map">
        </div>
      </div>
    ) 
  }

}

 