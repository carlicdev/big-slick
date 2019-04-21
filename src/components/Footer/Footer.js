import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../images/bigSlick6.png';

class Footer extends Component {
    render() {
        return (
            <div>
        <FooterContainer className=" mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9 text-left">
                <ul>
                  <li><h5>Nuestros Aliados</h5></li>
                  <li><a href="http://www.dailystoic.com">The Daily Stoic</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://www.impactocapital.com">Impacto Capital</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://www.dailystoic.com">dailystoic.com</a></li>
                </ul>
              </div>
              <div className="col-md-3 mt-3">
                <div className="img-container img-container-3 m-auto">
                    <img src={logo} alt="logo" className="img-fluid" />  
                </div>
              </div>
            </div>
          </div>
        </FooterContainer>
            </div>
        );
    }
}

const FooterContainer = styled.footer`
background: var(--navBlue) !important;
padding: 1rem;
`

export default Footer;