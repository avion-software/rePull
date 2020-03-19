import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleDown';

import ToolbarItem from '../../ToolbarItem';

const FetchItem = ({ onClick }) => (
    <ToolbarItem
        onClick={onClick}
        icon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
        label="Fetch"
    />
);

FetchItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default FetchItem;
