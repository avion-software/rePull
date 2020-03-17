import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleUp';

import ToolbarBadgeItem from '../../ToolbarBadgeItem';
import useTheme from '@material-ui/core/styles/useTheme';

const PushItem = ({ onClick, changes }) => {
    const theme = useTheme();

    return (
        <ToolbarBadgeItem
            onClick={onClick}
            badge={changes}
            badgeColor={theme.palette.badge.push}
            icon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}
            label="Push"
        />
    );
};

PushItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PushItem;
