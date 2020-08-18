import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => {
    return ( 
        <li id={gasto.id} className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
        </li>
     );
}
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
}
export default Gasto;