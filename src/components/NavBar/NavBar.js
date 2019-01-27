import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../NavBar/logos/mini-logo.png';

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar fixed-top navbar-dark bg-primary navbar-expand-sm px-sm-5 row justify-content-between">

              <div className="col-4">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-4">
                <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-1">
                      <Link to="/home" className="nav-link">
                       home
                      </Link>
                    </li>
                    <li className="nav-item ml-1">
                      <Link to="/projects" className="nav-link">
                       portafolio
                      </Link>
                    </li>
                    <li className="nav-item ml-1">
                      <Link to="/contact" className="nav-link">
                        contacto
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          
             </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
  background: var(--navBlue) !important;
  .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.1rem;
      text-transform: capitalize;
  }
`
export default NavBar;