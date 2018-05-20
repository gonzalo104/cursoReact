import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CustumerListItem = ({name, editAction, delAction,urlPath, dni}) => {
    return (
        <div>
            <div className="custumer-list-item">
                <div className="field">
                    <Link to={`${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${dni}/del`}>delAction</Link>
                </div>
            </div>
        </div>
    );
};

CustumerListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustumerListItem;