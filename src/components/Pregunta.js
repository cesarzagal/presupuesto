import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Preguntar = ({guardarPresupuesto, guardarRestante, actualizaPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardaError] = useState(false);
    //funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value));
        guardarRestante(parseInt(e.target.value));
    }
    //submit para definir presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        //validar valores
        if(cantidad<1 || isNaN(cantidad)){
            guardaError(true);
            return;
        }
        //si pasa la validacion
        guardaError(false);
        guardarPresupuesto(cantidad)
        guardarCantidad(cantidad)
        actualizaPregunta(false);
    }
    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {
                error 
                    ? 
                        <Error
                            mensaje="Error en el Presupuesto!"
                        /> 
                    : 
                        null
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
Preguntar.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired, 
    guardarRestante: PropTypes.func.isRequired, 
    actualizaPregunta: PropTypes.func.isRequired
}
export default Preguntar;