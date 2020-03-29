import React from 'react';
import PropTypes from 'prop-types';
import useContextMenuStyles from './ContextMenuStyles';

const ContextMenu = ({ children }) => {
    const classes = useContextMenuStyles();

    return (
        <div
            className={classes.root}
            onClickCapture={(e) => e.preventDefault()}
        >
            {children}
        </div>
    );
};

ContextMenu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

export default ContextMenu;
