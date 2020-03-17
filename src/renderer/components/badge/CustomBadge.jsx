import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import useCustomBadgeStyles from './CustomBadgeStyles';

const CustomBadge = ({ badgeContent, badgeColor, children }) => {
    const classes = useCustomBadgeStyles({ badgeColor });

    return (
        <Badge classes={classes} badgeContent={badgeContent}>
            {children}
        </Badge>
    );
};

CustomBadge.propTypes = {
};

export default CustomBadge;