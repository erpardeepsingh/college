import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Info from './components/layout/Info';
import Hod from './components/layout/Hod';
import Contained from './components/layout/Containered';
import Title from './components/layout/Title';
import Achievement from './components/layout/Achievement';
import Notices from './components/layout/Notices';
class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
       <Header/>
       <section class="section-links">
<div class="container">
  <div class="row">
  <Notices/><Notices/><Notices/>
  </div>
  </div>
  </section>
       <section class="section-about-us" id="about">
       <div class="my-container">
       <div class="my-row">
        <Info/>
        <Hod/>
       </div>
       </div>
       <div id="about-02">
      <div class="content-box-md">
        <div class="my-container">
          <div class="my-row u-margin-top-medium">
          <Contained/>
          <Contained/>
          <Contained/>
          </div>
          </div>
          </div>
          </div>
       </section>
       
       <section class="section-stats">
    <div class="content-box-md">
      <div class="container">
      <Title/>
      <div class="row wow fadeInUp" data-wow-duration="2s">
      <Achievement/>
      <Achievement/>
      <Achievement/>
      <Achievement/>
      </div>
      </div>
    </div>
  </section>
  
  <section class="section_PO_PEO" id="PO_PEO">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <div class="u-margin-bottom-medium justify wow fadeInLeft">
        <Info/><Info/>
        </div>
        </div></div></div></section>
       <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
