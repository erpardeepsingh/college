import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
class Header extends Component {
  render() {
    return (
      <div>
          <header class="header" id="home">
   <Navbar/>
     
  
    <div id="home-content">
      <div id="home-content-inner" class="text-center">
        <div id="home-heading">
          <h1 id="home-heading-1">Department Of</h1>
          <br />
          <h1 id="home-heading-2">Computer <span>Science</span></h1>
        </div>

        <div id="home-text">
          <p>
            The <span>computer</span> was born to
            <span>solve problems</span> that did not
            <span>exist</span> before.
          </p>
        </div>
      </div>
    </div>

    
    <Link to="#about" id="arrow-down" class="smoth-scroll">
      <i class="fa fa-angle-down"></i>
    </Link>
  </header>
      </div>
    )
  }
}
export default Header;