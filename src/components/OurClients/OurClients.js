import React, { Component } from 'react';

import imgOne from '../../images/bigSlick7.png';

class OurClients extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="card">
                    <div className="card-footer">
                        <h4>Clientes Satisfechos</h4>
                    </div>
                    <div className="card-body">
                    
                <div className="row">
                    <div className="col-10 col-md-6 col-lg-4 mx-auto">
                        <div className="card mb-5">
                            <div className="img-container">
                                <img src={imgOne} className="img-fluid" alt="machi" />
                            </div>
                            <div className="container py-1">
                              <p>"Fueron mas alla de lo que pensabamos. El sitio que desarrollaron para nosotros es justo lo que nuestro negocio necesitaba para dar el siguiente paso." </p>
                            </div>
                            <div className="card-footer bg-light text-dark">
                                <p>John Doe</p> <p><small>Doe´s Solutions</small> </p>
                            </div>
                        </div>                  
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 mx-auto">
                    <div className="card mb-5">
                            <div className="img-container">
                                <img src={imgOne} className="img-fluid" alt="machi" />
                            </div>
                            <div className="container py-1">
                              <p>"Nuestras ventas se dispararon gracias al sitio que BigSlick creo para nosotros y su servicio hizo cada parte del proceso muy simple."</p>
                            </div>
                            <div className="card-footer bg-light text-dark">
                                <p>John Doe</p> <p><small>from </small> Doe´s Solutions</p>
                            </div>
                        </div>                      
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 mx-auto">
                    <div className="card mb-5">
                            <div className="img-container">
                                <img src={imgOne} className="img-fluid" alt="machi" />
                            </div>
                            <div className="container py-1">
                              <p>"Profesionales y atentos a lo largo del proceso. Plasmaron nuestra visión en un sitio de primera clase." </p>
                            </div>
                            <div className="card-footer bg-light text-dark">
                                <p>John Doe</p> <p><small>Doe´s Solutions</small> </p>
                            </div>
                        </div>                      
                    </div>
                </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default OurClients;