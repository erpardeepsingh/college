import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Notfound from './Notfound';
class Posts extends Component {
  render() {
    return (
        
        <div className="App">
        <Header/>
          <Footer/>
        
     </div>
      
    )
  }
}
export default Posts;