import React from 'react';

function Title({name, title}) {
    return (
        <div className="col-md-10 mx-auto mt-4 text-center text-title">
          <h2 className="text-capitalize font-weight-bold">
           <strong className="text-dark">{name}</strong><strong className="text-blue">{title}</strong>
         </h2>
    </div>        
    );
}

export default Title;