import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div>
         <footer className="footer">
    <div className="container wow fadeInUp">
      <ul className="footer-nav">
        <li className="footer-nav__item">
          <Link to="#" className="footer-nav__link">Departmental Library</Link>
        </li>
        <li className="footer-nav__item">
          <Link to="#" className="footer-nav__link">Laboratories </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="#" className="footer-nav__link">Other Infrastructure </Link>
        </li>
        <li className="footer-nav__item">
          <Link to="#" className="footer-nav__link">Training and Placement</Link>
        </li>
      </ul>
      <p className="copyright">
        GNDEC© 2017 Computer Science and Engineering
      </p>
    </div>

  
    <Link to="#home" id="back-to-top" className="btn btn-sm btn-yellow btn-back-to-top smoth-scroll .d-none .d-sm-block"
      title="home" role="button">
      <i className="fa fa-angle-up"></i>
    </Link>
  </footer>
      </div>
    )
  }
}
export default Footer;