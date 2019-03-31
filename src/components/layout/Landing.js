import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import Hod from './Hod';
import Contained from './Containered';
import Title from './Title';
import Achievement from './Achievement';
import Notices from './Notices';
class Landing extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
        <section className="section-links">
 <div className="container">
   <div className="row">
   <Notices/><Notices/><Notices/>
   </div>
   </div>
   </section>
        <section className="section-about-us" id="about">
        <div className="my-container">
        <div className="my-row">
         <Info/>
         <Hod/>
        </div>
        </div>
        <div id="about-02">
       <div className="content-box-md">
         <div className="my-container">
           <div className="my-row u-margin-top-medium">
           <Contained/>
           <Contained/>
           <Contained/>
           </div>
           </div>
           </div>
           </div>
        </section>
        
        <section className="section-stats">
     <div className="content-box-md">
       <div className="container">
       <Title/>
       <div className="row wow fadeInUp" data-wow-duration="2s">
       <Achievement/>
       <Achievement/>
       <Achievement/>
       <Achievement/>
       </div>
       </div>
     </div>
   </section>
   
   <section className="section_PO_PEO" id="PO_PEO">
     <div className="container">
       <div className="row">
         <div className="col-md-12">
         <div className="u-margin-bottom-medium justify wow fadeInLeft">
         <Info/><Info/>
         </div>
         </div></div></div></section>
        <Footer/>
       </div>
    )
  }
}
export default Landing;