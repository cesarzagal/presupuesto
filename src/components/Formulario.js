import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const agregarGasto = (e) => {
        e.preventDefault();
        //validar
        if(cantidad < 1  || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //pasar el gasto a componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
        
    }
    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>
                Agrega tus gastos aqui
            </h2>
            {
                error
                ?
                    <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/>
                :
                null
            }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="test"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
                <label>Costo</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 200"
                    value={cantidad}
                    onChange={e => guardarCantidad(e.target.value)}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </div>
        </form>
     );
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;