import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notfound from './components/layout/Notfound';
import Landing from './components/layout/Landing';
class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="*" component={Notfound} />
     </div>
      </Router>
    );
  }
}

export default App;
