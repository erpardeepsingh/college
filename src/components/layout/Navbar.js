import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top ">
        
      <div className="container site-nav-wrapper">
      <a className="navbar-brand" href="https://gndec.ac.in">GNDEC HOME</a>
       
                
        <span id="mobile-nav-open-btn">
          &#9776;
        </span>
        <div className="collapse navbar-collapse" id="myNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
         
            <li className="nav-item">
            <a href="../../#about-02" class="nav-link smoth-scroll">Vision and Mission</a>
            </li>
            <li className="nav-item">
              <Link to="/posts/Courses" className="nav-link">Courses</Link>
            </li>
            
            <li className="nav-item">
              <a href="../../#PO_PEO" className="nav-link smoth-scroll">PO and PEO</a>
            </li>
            <li className="nav-item">
              <Link to="/posts/Faculty" className="nav-link">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/timetable" className="nav-link">Time Tables</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts/add" className="nav-link">Add New Post</Link>
            </li>
          </ul>
        </div>

        
        <div id="mobile-nav">
          <span id="mobile-nav-close-btn">
            &times;
          </span>
          <div id="mobile-nav-content">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a href="../../#about-02" className="nav-link smoth-scroll">Vision and Mission</a>
              </li>
              <li className="nav-item">
                <Link to="/posts/Courses" className="nav-link">Courses</Link>
              </li>
              
              <li className="nav-item">
                <a href="../../#PO_PEO" className="nav-link smoth-scroll">PO and PEO</a>
              </li>
              <li className="nav-item">
                <Link to="/posts/Faculty" className="nav-link">Faculty</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/timetable" className="nav-link">Time Tables</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/add" className="nav-link">Add New Post</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      </div>
    )
  }
}
export default Navbar;