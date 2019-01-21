import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Search from './pages/Search';
import Bookshelf from './pages/Bookshelf';
import NoMatch from './pages/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/bookshelf" component={Bookshelf}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
