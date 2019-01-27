import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Techs from '../Techs/Techs';
import Title from '../Title/Title';
import {ButtonContainer} from '../Button/Button';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeContainer>
                    <NavBar />
                    <Jumbotron />
                    <Techs />
                </HomeContainer>
                    <Footer />
            </React.Fragment>
        );
    }
}

const HomeContainer = styled.div`
 background: var(--mainWhite);
 color: var(--mainDark);
 width: 100%;
 height: cover;
 padding: 6rem;
 .img-container {
     transition: all 0.5s ease-in-out;
 }

 .card {
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer {
    background: var(--mainBlue);
    color: var(--mainWhite);
    border-top: transparent;
    transition: all 0.5s linear;
}
`;

const Image = styled.div`
 text-align: center;
 width: 100%;
`

export default Home;