import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from '../Button/Button';

class Jumbotron extends Component {
    render() {
        if (this.props.link === "projects") {          
            return (
                <div className="jumbotron text-center mt-1">
                  <p className="lead">{this.props.text1}</p>
                  <p className="lead">{this.props.text2}</p>
                  <hr className="my-4"/>
                  <p>{this.props.text3}</p>
                  <Link to="/projects">
                    <ButtonContainer>
                        {this.props.buttonText}
                    </ButtonContainer>
                  </Link>
                </div>
            );
        }
        else {
          return (
            <div className="jumbotron text-center mt-1">
              <p className="lead">{this.props.text1}</p>
              <p className="lead">{this.props.text2}</p>
              <hr className="my-4"/>
              <p>{this.props.text3}</p>
              <Link to="/contact">
                <ButtonContainer>
                    {this.props.buttonText}
                </ButtonContainer>
              </Link>
            </div>
          );
        }
    }
}

export default Jumbotron;