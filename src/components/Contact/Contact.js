import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SubTitle from '../Title/SubTitle';
import {ButtonContainer} from '../Button/Button';

import contactoImg from '../Contact/img/contacto.jpeg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        fetch('/api/contact', { 
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
           .then(res => res.json())
           .then(data => {
               console.log(data);
               this.setState({ 
                  name: '',
                  email: '',
                  message: ''
                    });
           })
           .catch(err => console.error(err));
        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <React.Fragment>
            <ContactContainer>
                <NavBar />
                <div className="jumbotron text-center">
                  <SubTitle name="big" title="Slick" />
                  <hr className="my-4"/>
                  <h4><strong>Trabajemos juntos!</strong></h4>
                  <p className="lead"></p>
                  <p className="lead">Permítenos saber mas sobre tu proyecto. Ya sea que necesites desarrollarlo desde cero, tengas algo empezado o solo necesites mantenimiento para tu página o aplicación, estaremos encantados de servirte. </p>
                  <hr className="my-4"/>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                      <div className="img-container my-2">
                        <img src={contactoImg} alt="contacto" className="card-img-top" />
                      </div>
                      <div className="card text-center p-5">
                        <h6><strong>Telefono:</strong> 12-34-56-78</h6>
                        <h6><strong>WhatsApp:</strong> 12-34-56-78</h6>
                        <h6><strong>Correo electrónico:</strong> test@tester.com</h6>
                      </div>
                    </div>
                   <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                     <div class="row myform">
                       <form className="col s12" onSubmit={this.handleSubmit}>
                         <div className="row">
                           <label htmlFor="name">
                           Nombre completo
                             <input 
                                 name="name"
                                 onChange={this.handleChange}
                                 value={this.state.name}
                                 type="text">
                             </input>
                           </label>
                           <label htmlFor="email">
                           Correo electrónico
                             <input
                                 name="email"
                                 onChange={this.handleChange}
                                 value={this.state.email}
                                 type="text">
                             </input>
                           </label>
                           <label htmlFor="message">Mensaje
                             <textarea className="textarea col-12 img-fluid " 
                                 name="message"
                                 onChange={this.handleChange}
                                 value={this.state.message}
                                 type="text">
                             </textarea>
                           </label>
                           <ButtonContainer type="submit">
                               enviar
                           </ButtonContainer>
                         </div>
                       </form>
                     </div>
                   </div>
                  </div>   
                </div>
            </ContactContainer>
            <Footer />
            </React.Fragment>
        );
    }
}

const ContactContainer = styled.div`
background: var(--mainWhite);
color: var(--mainDark);
 width: 100%;
 height: cover;
 padding: 7rem;
.myform {
    padding: 2rem;
    background: var(--mainBlue);
}
.textarea {
    width: 20rem;
    height: 15rem;
    background: var(--mainWhite);
}
`;
export default Contact;