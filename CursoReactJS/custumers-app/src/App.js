import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustumersContainer from './containers/CustumersContainer';

class App extends Component {
  renderhome = () => <h1>Home</h1>;
  renderCustumerContainer = () => <h1>Custumer Container</h1>;
  renderCustumerListContainer = () => <h1>Custumer List Container</h1>;
  renderCustumerNewContainer = () => <h1>Custumer New Contaner</h1>;



  render() {
    return (
      <Router>
          <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/custumers" component={CustumersContainer}/>
          <Switch>
            <Route path="/custumers/new" component={this.renderCustumerNewContainer}/>
            <Route path="/custumers/:dni" component={this.renderCustumerContainer}/>        
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
