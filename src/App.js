import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './components/layout/Notfound';
import Landing from './components/layout/Landing';
import Posts from './components/layout/Posts'; 
class App extends Component {
  render() {
    
    return (
      
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
          
          <Route exact path="/" component={Landing}/>
          <Route path="/posts/:id" component={Posts}/>
          
          <Route exact path="*" component={Notfound} />
          </Switch>
     </div>
      </Router>
    );
  }
}

export default App;
