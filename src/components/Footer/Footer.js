import React, { Component } from 'react';
import styled from 'styled-components';

import SubTitle from '../Title/SubTitle';

class Footer extends Component {
    render() {
        return (
            <div>
        <FooterContainer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <SubTitle name="big" title="Slick" />
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Nuestros Aliados</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="http://www.dailystoic.com">dailystoic.com</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </FooterContainer>
            </div>
        );
    }
}

const FooterContainer = styled.footer`
background: var(--navBlue) !important;
padding: 2rem;
`

export default Footer;