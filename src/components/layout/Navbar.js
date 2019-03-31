import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top ">
        
      <div className="container site-nav-wrapper">
        <Link to="" className="navbar-brand smoth-scroll">GNDEC Home</Link>

        <span id="mobile-nav-open-btn">
          &#9776;
        </span>
        <div className="collapse navbar-collapse" id="myNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="#home" className="nav-link smoth-scroll">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="#about-02" className="nav-link smoth-scroll">Vision and Mission</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link smoth-scroll">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link smoth-scroll">BOS</Link>
            </li>
            <li className="nav-item">
              <Link to="#PO_PEO" className="nav-link smoth-scroll">PO and PEO</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link smoth-scroll">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link smoth-scroll">Time Tables</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link smoth-scroll">CSI</Link>
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
                <Link to="#home" className="nav-link smoth-scroll">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">Vision and Mission</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">BOS</Link>
              </li>
              <li className="nav-item">
                <Link to="#PO_PEO" className="nav-link smoth-scroll">PO and PEO</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">Faculty</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">Time Tables</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link smoth-scroll">CSI</Link>
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