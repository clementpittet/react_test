import React, { Component } from 'react';
import {Router, Route, browserHistory, Link } from 'react-router';
import NavBack from './inc/nav-back'
import Footer from './inc/footer-back'

const TemplateBack  = (props) => {
  return (
    <div>
      <NavBack />
        {props.children}
      <Footer />
    </div>
  )
}

export default TemplateBack