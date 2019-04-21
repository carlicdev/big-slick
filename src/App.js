import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import Cover from '../src/components/Cover/Cover';
import Home from '../src/components/Home/Home';
import ProjectList from '../src/components/Projects/ProjectList';
import Contact from '../src/components/Contact/Contact';
import Modal from '../src/components/Modal/Modal';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
