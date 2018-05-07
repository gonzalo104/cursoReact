import React from 'react';
import PropTypes from 'prop-types';

const CustumerListItem = ({name, editAction, delAction,urlPath}) => {
    return (
        <div>
            <div className="custumer-list-item">
                <div className="field">
                    <Link to={`${props.urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${props.urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${props.urlPath}${dni}/del`}>delAction</Link>
                </div>
            </div>
        </div>
    );
};

CustumerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustumerListItem;