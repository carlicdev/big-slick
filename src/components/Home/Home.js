import React, { Component } from 'react';
import styled from 'styled-components';

import Jumbotron from '../Jumbotron/Jumbotron';
import Techs from '../Techs/Techs';
import FAQ from '../FAQ/FAQ';

import logo from '../../images/bigSlick4.png';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeContainer>
                  <div className="separator"></div>
                    <div className="img-container m-auto">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </div>
                    <Jumbotron 
                        text1="Somos un equipo de profesionales en desarrollo y diseño web comprometidos con crear y mantener proyectos de las mas alta calidad."
                        text2="Desarrollamos, actualizamos y damos mantenimiento a páginas y aplicaciones web."
                        text3="Queremos saber sobre tu proyecto. No podemos esperar para empezar a colaborar contigo!"
                        buttonText="contacto"
                    />
                    <div className="parallax section-1"></div>
                    <Jumbotron 
                        text1="En Big Slick nuestra misión es desarrollar estrategias sustentables que te permitan agregar valor a tu negocio."
                        text2="Entendemos que la presentación es parte fundamental del exito de una empresa, por eso nuestra meta es ayudarte a presentar tu negocio al mercado de una manera profesional."
                        text3="Visita nuestro portafolio y conoce algunos de nuestros proyectos!"
                        buttonText="portafolio"
                        link="projects"
                    />
                    <Techs />
                    <FAQ />
                </HomeContainer>
            </React.Fragment>
        );
    }
}

const HomeContainer = styled.div`
 background: var(--mainWhite);
 text-align: center;
 color: var(--mainDark);
 width: 100%;
 height: cover;
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


export default Home;