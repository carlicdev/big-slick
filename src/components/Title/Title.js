import React from 'react';

function Title({name, title}) {
    return (
        <div className="col-10 mx-auto mt-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
           <strong className="text-dark">{name}</strong><strong className="text-blue">{title}</strong>
         </h1>
    </div>        
    );
}

export default Title;