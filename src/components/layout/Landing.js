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
        <section className="section-about-us" id="about">
        <div className="my-container">
        <div className="my-row">
         <Info title1="Who we are" title2="A " title3="Story" title4="About us"content="Department of Computer Science and Engineering is established in
            year 1997. Department is offering B.Tech. and M.Tech. programs in
            Computer Science and Engineering. Laboratories of the department
            are equipped with state of the art infrastructure to cater course
            work and research activities. A Good number of books is available
            in departmental library for prompt access to students and faculty
            members. Under academic autonomy, study schemes of the offered
            programs are updated regularly focusing outcome based education,
            to make students employable as per national and international
            requirements. Graduates of the department are serving around the
            globe in eminent companies, academia, as well as in public sector.
            They are bringing laurel to the department by excelling in fields
            of their work. Every year a good number of students are clearing
            different competitive exams."/>
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
        <section className="section-links">
 <div className="container">
   <div className="row">
   <Notices/><Notices/><Notices/>
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
         <Info title1="Who we are" title2="Program " title3="Education " title4="Objectives (PEO)" 
         content={["",<p>
         1. To groom the graduates of the Computer Science & Engineering
         program for logical and practical approach to problem solving
         and function effectively as a skilled computer engineers who can
         respond to changing impact in a social and global context with a
         well-balanced preparation in engineering fundamentals and
         practical application.
       </p>,
         <p>
              2. To enable the graduates of the Computer Science & Engineering
              program to work in multicultural and multidisciplinary teams for
              effective problem solving and understand the principles of group
              dynamics, public policy, aesthetics, cost effectiveness and
              sustainable development.
            </p>,
          <p>
          3. To enable the graduates of Computer Science & Engineering in
          applying basic principles and practices of computing grounded in
          mathematics and science for successfully completing software
          related projects to meet customer business objectives and/or
          productively engage in research.
        </p>]}/>
        <p><br/></p>
        <Info title1="Who we are" title2="Program" title3="Objectives" title4="(PO)" 
         content={["",<p>
         1. Engineering knowledge: Apply the knowledge of mathematics,
         science, engineering fundamentals, and an engineering
         specialization to the solution of complex engineering problems.
       </p>,
       <p>
         2. Problem analysis: Identify, formulate, review research
         literature, and analyze complex engineering problems reaching
         substantiated conclusions using first principles of mathematics,
         natural sciences, and engineering sciences.
       </p>,
       <p>
         3. Design/development of solutions: Design solutions for complex
         engineering problems and design system components or processes
         that meet the specified needs with appropriate consideration for
         the public health and safety, and the cultural, societal, and
         environmental considerations.
       </p>,
       <p>
         4. Conduct investigations of complex problems: Use
         research-based knowledge and research methods including design
         of experiments, analysis and interpretation of data, and
         synthesis of the information to provide valid conclusions.
       </p>,
       <p>
         5. Modern tool usage: Create, select, and apply appropriate
         techniques, resources, and modern engineering and IT tools
         including prediction and modeling to complex engineering
         activities with an understanding of the limitations.
       </p>,
       <p>
         6. The engineer and society: Apply reasoning informed by the
         contextual knowledge to assess societal, health, safety, legal
         and cultural issues and the consequent responsibilities relevant
         to the professional engineering practice.
       </p>,
       <p>
         7. Environment and sustainability: Understand the impact of the
         professional engineering solutions in societal and environmental
         contexts, and demonstrate the knowledge of, and need for
         sustainable development.
       </p>,
       <p>
         8. Ethics: Apply ethical principles and commit to professional
         ethics and responsibilities and norms of the engineering
         practice.
       </p>,
       <p>
         9. Individual and team work: Function effectively as an
         individual, and as a member or leader in diverse teams, and in
         multidisciplinary settings.
       </p>,
       <p>
         10. Communication: Communicate effectively on complex
         engineering activities with the engineering community and with
         society at large, such as, being able to comprehend and write
         effective reports and design documentation, make effective
         presentations, and give and receive clear instructions.
       </p>,
       <p>
         11. Project management and finance: Demonstrate knowledge and
         understanding of the engineering and management principles and
         apply these to one’s own work, as a member and leader in a team,
         to manage projects and in multidisciplinary environments.
       </p>,
       <p>
         12. Life-long learning: Recognize the need for, and have the
         preparation and ability to engage in independent and life-long
         learning in the broadest context of technological change.
    </p>]}/>
         </div>
         </div></div></div></section>
        <Footer/>
       </div>
    )
  }
}
export default Landing;