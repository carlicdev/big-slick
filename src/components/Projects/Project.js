import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProjectConsumer } from '../../context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, img } = this.props.project;
        return (
            <ProjectWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                <ProjectConsumer>
                    {(value) => (
                   <div className="img-container p-5" 
                        onClick={() => {
                            value.handleDetail(id);
                        }}>
                       <img src={img} alt="project" className="card-img-top"/>
                   
                   <button 
                       className="project-btn"  
                       onClick={() => {
                           value.openModal(id);
                       }}
                   >
                     <span className="mr-2">
                        <i className="fas fa-search-plus" />                    
                      </span>
                   </button>                   
               </div>                        
                    )}

                </ProjectConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>

                    </div>
                </div>
            </ProjectWrapper>
        );
    }
}

Product.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string
    }).isRequired
};

const ProjectWrapper = styled.div`
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
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .project-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--mainBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all 0.5s ease-in-out;
    }
    .img-container:hover .project-btn {
        transform: translate(0,0);
    }
    .project-btn:hover {
        color: var(--lightBlue);
        background: var(--navBlue);
        cursor: pointer;
    }
`;

const ProjectsContainer = styled.div`
background: var(--mainWhite);
color: var(--mainDark);
width: 100%;
height: cover;
padding: 7rem;
.img-container {
    transition: all 0.5s ease-in-out;
}
.img-container:hover {
    transform: scale(1.4);
}
.card {
   border-color: transparent;
   transition: all 0.5s linear;
}
.card-footer {
   border-top: transparent;
   transition: all 0.5s linear;
}
`;
export default Product;