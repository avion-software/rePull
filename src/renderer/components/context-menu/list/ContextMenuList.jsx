import React from 'react';
import PropTypes from 'prop-types';
import useContextMenuListStyles from './ContextMenuListStyles';

const ContextMenuList = ({ children }) => {
    const classes = useContextMenuListStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

ContextMenuList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

export default ContextMenuList;
