import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleUp';

import ToolbarItem from '../../ToolbarItem';

const PushItem = ({ onClick }) => {
    return (
        <ToolbarItem
            onClick={onClick}
            icon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}
            label="Push"
        />
    );
};

PushItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PushItem;
