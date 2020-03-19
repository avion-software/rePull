import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import CustomBadge from '../badge/CustomBadge';
import useToolbarItemStyles from './ToolbarItemStyles';

const ToolbarBadgeItem = ({
    icon,
    label,
    onClick,
    badge,
    badgeColor,
}) => {
    const classes = useToolbarItemStyles();

    return (
        <div
            className={classes.root}
            onClick={onClick}
        >
            <div className={classes.iconWrapper}>
                <CustomBadge badgeContent={badge} badgeColor={badgeColor}>
                    <div className={classes.icon}>
                        {icon}
                    </div>
                </CustomBadge>
            </div>
            <Typography className={classes.label}>
                {label}
            </Typography>
        </div>
    );
};

ToolbarBadgeItem.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    badge: PropTypes.number.isRequired,
    badgeColor: PropTypes.string.isRequired,
};

ToolbarBadgeItem.defaultProps = {
    onClick: null,
};

export default ToolbarBadgeItem;
