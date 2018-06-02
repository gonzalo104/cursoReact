import React from 'react';
import PropTypes from 'prop-types';
import CustumersActions from './CustumersActions';

const CustumerData = ({id, name, dni, age,onBack, isDeleteAllow,onDelete}) => {
    return (
        <div>
            <div className="custumer-data">
                    <h2>Datos del cliente</h2>
                    <div><strong>Nombre</strong><i>{name}</i></div>
                    <div><strong>DNI</strong><i>{dni}</i></div>
                    <div><strong>Edad</strong><i>{age}</i></div>                
            </div>
            <CustumersActions>
                <button onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={ () => onDelete(id)}>Eliminar</button>}
            </CustumersActions>
        </div>
    );
};

CustumerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustumerData;