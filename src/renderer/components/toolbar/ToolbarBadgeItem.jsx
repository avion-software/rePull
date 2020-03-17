import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ToolbarItem from './ToolbarItem';

const ToolbarBadgeItem = ({ icon, label, onClick, badge, badgeColor }) => (
    <ToolbarItem
        icon={badge ? (
            <Badge badgeContent={badge} color={badgeColor}>
                {icon}
            </Badge>
        ) : icon}
        label={label}
        onClick={onClick}
    />
);

ToolbarBadgeItem.propTypes = {
    onClick: PropTypes.func,
};

ToolbarBadgeItem.defaultProps = {
    onClick: null,
};

export default ToolbarBadgeItem;