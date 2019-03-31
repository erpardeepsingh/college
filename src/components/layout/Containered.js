import React, { Component } from 'react'

class Contained extends Component {
  render() {
    return (
      <div className="col-1-of-3 wow fadeInUp" data-wow-duration="2s">
      <div className="about-item text-center">
        <i className="fa fa-eye"></i>
        <h3>vision</h3>
        <hr />
        <p>
          To generate competent professionals to become part of the
          industry and research organizations at the national and
          international levels.
        </p>
      </div>
    </div>
    )
  }
}
export default Contained;