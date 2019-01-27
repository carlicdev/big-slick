import React, { Component } from 'react';
import styled from 'styled-components';

import { ProjectConsumer } from '../../context'

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Project from '../Projects/Project';
import SubTitle from '../Title/SubTitle';


class ProjectList extends Component {
    render() {
        return (
            <React.Fragment>
            <ProjectsContainer>
                <NavBar />
                <div className="row">
                  <div className="col-12 text-center">
                <SubTitle name="big" title="Slick" />
                  </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <Title name="portafolio"  />
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
                </div>
            </ProjectsContainer>
            <Footer />
            </React.Fragment>
        );
    }
}

const ProjectsContainer = styled.div`
background: var(--mainWhite);
color: var(--mainDark);
width: 100%;
height: cover;
padding: 7rem;
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