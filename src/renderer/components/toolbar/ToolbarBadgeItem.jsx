import React from 'react';
import PropTypes from 'prop-types';
import ToolbarItem from './ToolbarItem';
import CustomBadge from '../badge/CustomBadge';

const ToolbarBadgeItem = ({
    icon,
    label,
    onClick,
    badge,
    badgeColor,
}) => (
    <ToolbarItem
        icon={badge ? (
            <CustomBadge badgeContent={badge} badgeColor={badgeColor}>
                {icon}
            </CustomBadge>
        ) : icon}
        label={label}
        onClick={onClick}
    />
);

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
