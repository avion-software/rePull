import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_BRANCH_SHAPE } from '../../../constants/shapes';

const BranchTreeItem = ({ value, children }) => (
    <div>
        {value.name}
        {children}
    </div>
);

BranchTreeItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default BranchTreeItem;
