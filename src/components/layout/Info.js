import React, { Component } from 'react'

class Info extends Component {
  render() {
    return (
      <div  className="col-3-of-4  wow fadeInLeft">
          <div id="about-left">
            <div className="vertical-heading dark">
              <h5>{this.props.title1}</h5>
              <h2>{this.props.title2} <strong>{this.props.title3}</strong><br />{this.props.title4}</h2>
            </div>
          </div>
       <p className="u-margin-top-small text-justify">
                 {this.props.content}
          </p>
        </div>

    )
  }
}
export default Info;