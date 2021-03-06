import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';
import Nav from './inc/nav'
import Footer from './inc/footer'

const Template  = (props) => {
  return (
    <div>
      <Nav />
        {props.children}
      <Footer />
    </div>
  )
}

export default Template