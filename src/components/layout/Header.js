import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
class Header extends Component {
  render() {
    return (
      <div>
          <header className="header" id="home">
   <Navbar/>
     
  
    <div id="home-content">
      <div id="home-content-inner" className="text-center">
        <div id="home-heading"><br/><br/><br/>
          <h1 id="home-heading-1">Department Of</h1>
          <br />
          <h1 id="home-heading-2">Computer <span>Science</span></h1><br/>
          <h1 id="home-heading-2"><span>And </span>Engineering</h1><br/>
        </div>
      </div>
    </div>

    
    <a href="#about" id="arrow-down" className="smoth-scroll">
      <i className="fa fa-angle-down"></i>
    </a>
  </header>
      </div>
    )
  }
}
export default Header;