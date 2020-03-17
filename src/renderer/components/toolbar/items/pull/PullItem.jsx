import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';

import ToolbarItem from '../../ToolbarItem';

const PullItem = ({ onClick }) => {
    return (
        <ToolbarItem
            onClick={onClick}
            icon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
            label="Pull"
        />
    );
};

PullItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PullItem;
