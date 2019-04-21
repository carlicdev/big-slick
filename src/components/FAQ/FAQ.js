import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <div className="container">
                <div className="card mt-2 p-0">
                    <div className="card-footer">
                        <h3>Preguntas Frecuentes</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5><b>Que necesito para empezar un proyecto?</b></h5>
                                <p>Definir el numero de secciones que tendra el sitio y el contenido de cada una de ellas. Nos puede enviar el texto en un archivo Word, cualquier otro procesador de palabras o incluso por correo electrónico.</p>
                                <h5><b>Como es el proceso de diseño y desarrollo?</b></h5>
                                <p>Una vez recibido el texto del sitio le presentaremos de 2 a 5 propuestas de diseño de acuerdo con las características que usted necesite. Cuando escoja la propuesta que mas le agrade procedemos con el desarrollo del sitio el cual podra seguir en tiempo real por medio de un enlace que le proporcionaremos.</p>
                            </div>
                            <div className="col-md-6">
                                <h5><b>En cuanto tiempo entregan el proyecto?</b></h5>
                                <p>Dependiendo de la complejidad de su página o aplicación, el proceso de diseño y desarrollo puede tardar entre 5-15 dias. Especificamos los tiempos de entrega en nuestro presupuesto.</p>
                                <h5><b>Cual es la forma de pago?</b></h5>
                                <p>Una vez que acepta nuestro presupuesto requerimos el pago del 50% del proyecto para iniciar el proceso de diseño y desarrollo, el resto debera ser cubierto al finalizar el proyecto.</p>
                                <p><b>**</b>Aceptamos depósitos bancarios y diversos monederos electrónicos.</p>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default FAQ;