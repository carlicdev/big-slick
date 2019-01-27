import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from '../Button/Button';
import SubTitle from '../Title/SubTitle';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
              <SubTitle name="big" title="Slick" />
              <p className="lead">Somos un equipo de profesionales en tecnologia y diseño comprometidos con desarrollar y mantener proyectos que cumplan con los mas altos estandares de cálidad.</p>
              <p className="lead">Desarrollamos, actualizamos y damos mantenimiento a páginas y aplicaciones web. </p>
              <hr className="my-4"/>
              <p>Cuentanos sobre tu proyecto. No podemos esperar para empezar a colaborar contigo para ver realizado tu sueño. </p>
              <Link to="/contact">
                <ButtonContainer>
                    contacto
                </ButtonContainer>
              </Link>
            
              
            </div>
        );
    }
}

export default Jumbotron;