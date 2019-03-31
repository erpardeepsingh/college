import React, { Component } from 'react'

class Hod extends Component {
  render() {
    return (
      <div class="col-1-of-4  wow fadeInUp">
          <div class="hod">
            <div class="hod-heading u-margin-bottom-small">
              <h2>Head Of Department</h2>
            </div>
            <div class="hod__img">
              <img src="images/departments/cse/client-1.jpg" class="img-fluid hod__img-animated" alt="Head Of Department" />
            </div>
            <div class="hod-about">
              <ul>
                <li class="hod-about-list-item">Dr. Parminder Singh</li>
                <li class="hod-about-list-item">Professor and Head</li>
                <li class="hod-about-list-item">
                  Department of Computer Science and Engineering
                </li>
                <li class="hod-about-list-item">
                  Guru Nanak Dev Engineering College, Ludhiana-141006, Punjab.
                </li>
                <li class="hod-about-list-item">Email: cse@gndec.ac.in</li>
                <li class="hod-about-list-item">Phone: 0161-5064547</li>
              </ul>
            </div>
          </div>
        </div>
   )
  }
}
export default Hod;