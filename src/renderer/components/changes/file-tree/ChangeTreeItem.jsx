import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';
import useChangeTreeItemStyles from './ChangeTreeItemStyles';

const ChangeTreeItem = ({
    value,
    children,
    selected,
    onSelect,
}) => {
    const classes = useChangeTreeItemStyles();
    const handleClick = useCallback((event) => {
        event.stopPropagation();

        if (onSelect && !value.children) {
            onSelect(value);
        }
    }, [value, onSelect]);

    return (
        <div
            className={classes.root}
            onClick={handleClick}
        >
            <div
                className={selected && classes.rootSelected}
            >
                {value.name}
            </div>
            {children && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

ChangeTreeItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_CHANGE_SHAPE).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};

ChangeTreeItem.defaultProps = {
    children: null,
};

export default ChangeTreeItem;
