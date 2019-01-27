import React, { Component } from 'react';

import imgOne from '../Techs/logos/desarrollo.jpeg';
import imgTwo from '../Techs/logos/diseño.jpeg';
import imgThree from '../Techs/logos/backend.jpeg';

import reactMini from '../Techs/logos/react-mini.png';
import bootstrapMini from '../Techs/logos/bootstrap-mini.png';
import cssMini from '../Techs/logos/css-mini.png';
import htmlMini from '../Techs/logos/html-mini.png';
import javascriptMini from '../Techs/logos/javascript-mini.png';
import angularMini from '../Techs/logos/angular-mini.png';
import nodejsMini from '../Techs/logos/nodejs-mini.png';
import jqueryMini from '../Techs/logos/jquery-mini.png';
import phpMini from '../Techs/logos/php-mini.png';


class Techs extends Component {
    render() {
        return (
            <div className="py-5">
            <div classname="container">
            <div className="row">
              <div className="col-9 mx-auto text-center col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="card-footer">
                Desarrollo
                </div>
                  <div className="img-container">
                    <img src={imgOne} className="img-fluid" alt="desarrollo" />
                  </div>
                  <div className="container py-1">
                  <p>Combinamos varias tecnologias para obtener <strong>la mejor experiencia</strong> de usuario. Páginas y aplicaciones <strong>interactivas</strong> para lograr una mejor <strong>comunicación</strong> entre página y usuario. </p>
                  </div>
                </div>
              </div>
              <div className="col-9 mx-auto text-center col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="card-footer">
                  Diseño
                </div>
                  <div className="img-container">
                    <img src={imgTwo} className="img-fluid" alt="diseño" />
                  </div>
                  <div className="container py-1">
                  <p>Contamos con diseñadores expertos asi como diversas alianzas con empresas de <strong>diseño y publicidad</strong>. Integramos las ultimas tecnologias para lograr un maximo <strong>impacto</strong> en el usuario. </p>
                  </div>
                </div>
              </div>
              <div className="col-9 mx-auto text-center col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="card-footer">
                Servidores y Bases de Datos
                </div>
                  <div className="img-container">
                    <img src={imgThree} className="img-fluid" alt="backend" />
                  </div>
                  <div className="container py-1">
                  <p>Desarrollo <strong>integral</strong> para almacacenamiento y manipulación de datos. Integramos tecnologias de <strong>back-end</strong> a tu página. Maneja sesiones, guarda información del usuario y mucho mas.  </p>
                  </div>
                </div>
              </div>
          </div>
          </div>
      </div>
        );
    }
}

export default Techs;