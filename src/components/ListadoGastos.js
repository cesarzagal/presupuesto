import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const ListadoGastos = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto =>(
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))
            
            }
        </div>
     );
}
ListadoGastos.propTypes = {
    gastos: PropTypes.array.isRequired,
}
export default ListadoGastos;