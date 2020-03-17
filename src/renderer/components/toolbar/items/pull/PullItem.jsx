import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@material-ui/core/styles/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';

import ToolbarBadgeItem from '../../ToolbarBadgeItem';

const PullItem = ({ onClick, changes }) => {
    const theme = useTheme();

    return (
        <ToolbarBadgeItem
            onClick={onClick}
            badge={changes}
            badgeColor={theme.palette.badge.pull}
            icon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
            label="Pull"
        />
    );
};

PullItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PullItem;
