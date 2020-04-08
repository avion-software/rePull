import React from 'react';
import PropTypes from 'prop-types';
import useContextMenuListItemStyles from './ContextMenuListItemStyles';
import useNativeEvent from '../../../utils/useNativeEvent';

const ContextMenuListItem = ({ children, onClick }) => {
    const classes = useContextMenuListItemStyles();
    const ref = useNativeEvent('click', onClick);

    return (
        <div
            className={classes.root}
            ref={ref}
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
