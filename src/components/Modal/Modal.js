import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProjectConsumer } from '../../context';
import {ButtonContainer} from '../Button/Button';

class Modal extends Component {
    render() {
        return (
            <ProjectConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, info, company } = value.modalProject;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <img src={img} className="img-fluid" alt="project" />
                                                                        {/* project text */}
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                         <span className="text-uppercase">{title}</span>
                                    </h4>
                                    <p className="text-muted lead">{info}</p>
                                        <Link to="/projects">
                                            <ButtonContainer  onClick={ () => closeModal() }>
                                               cerrar
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );

                    }
                }}
            </ProjectConsumer>
        );
    }
}

const ModalContainer = styled.div`
    padding-top: 5rem;
    color: var(--mainDark);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;

export default Modal;