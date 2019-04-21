import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import { ProjectProvider } from '../src/context';

ReactDOM.render(
        <ProjectProvider>
        <Router>
           <App />
        </Router>
        </ProjectProvider>
, document.getElementById('root'));

