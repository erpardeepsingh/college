import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Notices extends Component {
  render() {
    return (
        <div className="col-md-4  u-margin-bottom-medium  wow fadeInLeft">
        <h1 className="u-margin-bottom-small">News and Events</h1>
        <ul className="list-group dept">
          <li className="list-group-item">
            <Link to="#" className="dept-link">Rescheduled Synopsis Presentation of Major Project</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">Groups and Guides allotted to Third Year Students for Minor
              Project</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">Groups and Guides allotted to final year students (Morning
              Shift)</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">Groups and Guides alloted to final year students (Evening
              Shift)</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">List of Elective Subjects Allotment of Final Year Students
              for Session Jan-May, 2019</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">List of Elective Subjects Allotment of Third Year</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">List of Elective Subjects Allotment of Third Year Students
              for Session Jan-May, 2019</Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="dept-link">Academic Calendar for session 2018-19 (Even Semester)</Link>
          </li>
        </ul>
      </div>
         
    )
  }
}
export default Notices;