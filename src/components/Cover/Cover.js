import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Title from '../Title/Title';
import {ButtonContainer} from '../Button/Button';
import fbMini from '../Cover/logos/fb-mini.png';
import twitterMini from '../Cover/logos/twitter-mini.png';
import linkedinMini from '../Cover/logos/linkedin-mini.png';

class Cover extends Component {
    render() {
        return (
            <CoverContainer>
               
                <Title name="Big" title="Slick" />
                <Title name=".web" title="Development" />
                <div className="btn-container">
                  <Link to="/home">
                    <ButtonContainer>
                    entrar
                    </ButtonContainer>
                  </Link>
                </div>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-4 mx-auto text-center text-slanted my-5">
                      <div className="img-container">
                        <Link to="/">
                          <img src={fbMini} alt="facebook" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-4 mx-auto text-center text-slanted my-5">
                      <div className="img-container">
                        <Link to="/">
                          <img src={twitterMini} alt="twitter" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-4 mx-auto text-center text-slanted my-5">
                      <div className="img-container">
                        <Link to="/">
                          <img src={linkedinMini} alt="linkedin" />  
                        </Link>
                      </div>
                    </div>
                </div>
            </div>
            </CoverContainer>
        );
    }
}

const CoverContainer = styled.div`
 background: var(--mainWhite);
 background-image: linear-gradient(90deg,
  #1885aa, #1190bb, #0f9fcf, #0f8fb9,
  #0a789c, #0f7597 #1d7490 #3e7c90
  )!important;
 width: 100%;
 height: cover;
 padding: 7rem;
 .img-container {
     transition: all 0.5s ease-in-out;
 }
 .img-container:hover {
     transform: scale(1.4);
 }
`;

const Image = styled.div`
 text-align: center;
 width: 100%;
`

export default Cover;