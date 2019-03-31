import React, { Component } from 'react'

class Hod extends Component {
  render() {
    return (
      <div className="col-1-of-4  wow fadeInUp">
          <div className="hod">
            <div className="hod-heading u-margin-bottom-small">
              <h2>Head Of Department</h2>
            </div>
            <div className="hod__img">
              <img src="images/departments/cse/client-1.jpg" className="img-fluid hod__img-animated" alt="Head Of Department" />
            </div>
            <div className="hod-about">
              <ul>
                <li className="hod-about-list-item">Dr. Parminder Singh</li>
                <li className="hod-about-list-item">Professor and Head</li>
                <li className="hod-about-list-item">
                  Department of Computer Science and Engineering
                </li>
                <li className="hod-about-list-item">
                  Guru Nanak Dev Engineering College, Ludhiana-141006, Punjab.
                </li>
                <li className="hod-about-list-item">Email: cse@gndec.ac.in</li>
                <li className="hod-about-list-item">Phone: 0161-5064547</li>
              </ul>
            </div>
          </div>
        </div>
   )
  }
}
export default Hod;