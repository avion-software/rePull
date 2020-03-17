import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ToolbarItem from './ToolbarItem';
import CustomBadge from '../badge/CustomBadge';

const ToolbarBadgeItem = ({ icon, label, onClick, badge, badgeColor }) => (
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
};

ToolbarBadgeItem.defaultProps = {
    onClick: null,
};

export default ToolbarBadgeItem;