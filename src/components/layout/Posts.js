import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Info from './Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Notfound';
import PostsDetail from './PostsDetail';
class Posts extends Component {
  render() {
    if (this.props.match.params.id=="add") {
    return (
        
        <div className="App">
       <Navbar/>
       
         
       
       <div className="bg-light ctrd">


<div className="row">
  
        <div className="col-9">
          <h1 className="col-12 my-4">Create a post</h1>
          <form method='post' action='/create_post'>
          <div className='form-group'>
           <label className='col-2'><h3>Title:</h3></label><input type='text' name='title' className='col-10'/>
          </div>
          <div className='form-group'>
            <label className='col-2'><h3>Sub Title:</h3></label><input type='text' name='subtitle' className='col-10' />
          </div>
          <div className='form-group'>
            <label className='col-2 align-top'><h3>Body:</h3></label><textarea rows='25' cols='100' type='text' name='body' className='col-10'></textarea>
          </div>
          <div className='form-group float-right'>
            <input className='btn btn-success' type='submit' value='Submit' />
          </div>
          </form>
      </div>
</div>
</div>

         <Footer/>
        
     </div>
      
    )
    }
    else if(this.props.match.params.id=="timetable"){
      return (
        <div className="App ctrd">
        
       <Navbar/>
       <PostsDetail title="Time Table" content={["",<a href=""><h3>Faculty</h3></a>,<br/>,<a href=""><h3>UG & PG students</h3></a>]}/>
       <Footer/>
       </div>
      )
    }
    else if(this.props.match.params.id=="Courses"){
      return (
        <div className="App ctrd">
        
       <Navbar/>
       <PostsDetail title="Courses" content={["",<b><h3>Under Graduation Courses</h3></b>,<br/>,<p><h3>B.Tech Computer Science & Engineering</h3></p>]}/>
       <Footer/>
       </div>
      )
    }
    else if(this.props.match.params.id=="Faculty"){
      return (
        <div className="App ctrd">
        
       <Navbar/>
       <PostsDetail title="Faculty" content={["",<a href=""><h3>Faculty Details</h3></a>]}/>
       <Footer/>
       </div>
      )
    }
    else{
      return (
        <div className="App">
        
       <Notfound/>
       </div>
      )
    }
  }
}
export default Posts;