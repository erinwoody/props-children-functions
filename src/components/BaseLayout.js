import React, { Component } from 'react'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default class BaseLayout extends Component {
  render() {
    return (
      <div class="container">
        <Header/>  
      <div>
      {this.props.children}  
      </div>
        <Footer/>
      </div>
    );
  }
}

