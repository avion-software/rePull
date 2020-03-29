import React from 'react';
import PropTypes from 'prop-types';
import useContextMenuStyles from './ContextMenuStyles';

const preventEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
};

const ContextMenu = ({ children, left, top }) => {
    const classes = useContextMenuStyles();

    return (
        <div
            className={classes.root}
            onClickCapture={preventEvent}
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
    left: PropTypes.number,
    top: PropTypes.number,
};

ContextMenu.defaultProps = {
    left: 0,
    top: 0,
};

export default ContextMenu;
