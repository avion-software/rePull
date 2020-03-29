import React from 'react';
import PropTypes from 'prop-types';
import useContextMenuListItemStyles from './ContextMenuListItemStyles';

const ContextMenuListItem = ({ children, onClick }) => {
    const classes = useContextMenuListItemStyles();

    return (
        <div
            className={classes.root}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

ContextMenuListItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    onClick: PropTypes.func,
};

ContextMenuListItem.defaultProps = {
    onClick: null,
};

export default ContextMenuListItem;
