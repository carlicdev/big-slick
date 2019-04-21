import React, { Component } from 'react';
import styled from 'styled-components';

import { ProjectConsumer } from '../../context'

import Jumbotron from '../Jumbotron/Jumbotron';
import Project from '../Projects/Project';
import logo from '../../images/bigSlick4.png';


class ProjectList extends Component {
    render() {
        return (
            <React.Fragment>
            <ProjectsContainer>
                <div className="separator"></div>
                        <Jumbotron  
                            text1="En esta sección mostramos algunos de nuestros proyectos para que puedas darte una idea de las caracteristicas que podrias incluir en tu sitio o aplicación."
                            text2="Cada proyecto incluye una breve reseña del sitio o aplicación asi como las tecnologias usadas para su desarrollo."
                            text3="Si quieres implementar alguna caracteristica de nuestros proyectos en algun proyecto ya existente no dudes en contactarnos."
                            buttonText="contacto"
                        />
                        <div className="img-container-4 m-auto">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>
                    <div className="container">
                        <div className="row">
                           <ProjectConsumer>
                               {(value) => {
                                 return value.projects.map(project => {
                                       return <Project key={project.id} project={project} />
                                   }); 
                               }}
                           </ProjectConsumer>
                        </div>
                    </div>      
            </ProjectsContainer>
            </React.Fragment>
        );
    }
}

const ProjectsContainer = styled.div`
background: var(--mainWhite);
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

export default ProjectList;