import React, { Component } from 'react';

import axios from 'axios';

import { ButtonContainer } from '../Button/Button';
import logo from '../../images/bigSlick4.png';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
      sent: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    this.setState({sent: true});
    e.preventDefault();
    const { name, phone, email, message } = this.state;
    const form = await axios.post('/api/form', {
      name,
      phone,
      email,
      message
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="separator"></div>
        <div className="parallax3 mb-5">
        </div>
          <div className="container">
          <div className="row">
            <div className="col-md-4 light-background p-3">
            <div className="img-container m-auto">
                <img src={logo} alt="logo" className="img-fluid" />
            </div>
              <ul className="mt-5">
                  <li className="p-1 text-left"><span className="mr-2"><i className="fab fa-whatsapp"></i></span> 55-55-55-55</li>
                  <li className="p-1 text-left"><span className="mr-2"><i className="fa fa-phone"></i></span> (015) 555-55-55</li>
                  <li className="p-1 text-left"><span className="mr-2"><i className="fas fa-envelope"></i></span> bigslick.dev@gmail.com</li>
              </ul>

            </div>
            <div className="col-md-8 white-background p-5">
            <h4 className="text-left">Contacto</h4>
            <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-2 p-1">
                  <label htmlFor="name">Nombre</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name} 
                      placeholder="Nombre">
                  </input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2 p-1">
                  <label htmlFor="phone">Teléfono</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      name="phone" 
                      onChange={this.handleChange}
                      value={this.state.phone} 
                      placeholder="Teléfono o celular">
                  </input>
                  <small id="phone" className="form-text text-muted">*opcional</small>
                </div>
              </div>
            </div>
                <div className="form-group p-1">
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      onChange={this.handleChange}
                      value={this.state.email} 
                      placeholder="Email">
                  </input>
                  <small id="email" className="form-text text-muted">Ingresa un correo electrónico válido para poder contactarte.</small>
                </div>
                <div className="form-group p-1">
                  <label htmlFor="message">Mensaje</label>
                  <textarea 
                      className="form-control" 
                      name="message" 
                      onChange={this.handleChange}
                      value={this.state.message} 
                      rows="5"
                      placeholder="Cuentanos sobre tu proyecto"
                      >
                  </textarea>
                </div>
                <ButtonContainer type="submit">Enviar</ButtonContainer>
            </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Contact;