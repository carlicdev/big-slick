import React from 'react';

import logo from '../Title/logos/mini-logo.png'

function SubTitle({name, title}) {
    return (
        <div className="text-title">
          <img src={logo} alt="logo"/>
          <h5 className="text-capitalize font-weight-bold">
           <strong className="text-dark">{name}</strong><strong className="text-blue">{title}</strong>
         </h5>
    </div>        
    );
}

export default SubTitle;