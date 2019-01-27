import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cover from '../src/components/Cover/Cover';
import Home from '../src/components/Home/Home';
import ProjectList from '../src/components/Projects/ProjectList';
import Contact from '../src/components/Contact/Contact';
import Modal from '../src/components/Modal/Modal';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
