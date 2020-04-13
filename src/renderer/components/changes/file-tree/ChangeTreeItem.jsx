import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';
import useChangeTreeItemStyles from './ChangeTreeItemStyles';

const ChangeTreeItem = ({ value, children, selected }) => {
    const classes = useChangeTreeItemStyles();

    return (
        <div className={clsx(classes.root, selected && classes.rootSelected)}>
            <div>{value.name}</div>
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
};

ChangeTreeItem.defaultProps = {
    children: null,
};

export default ChangeTreeItem;
