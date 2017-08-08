import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';

const Footer = (props) => {
    return(
        <div>
        <footer className="page-footer blue-grey">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li><Link className="white-text" to="/">Index</Link></li>
                    <li><Link className="white-text" to="/list">List</Link></li>
                    <li><Link className="white-text" to="/users">User</Link></li>
                    <li><Link className="white-text" to="/map">map</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer