import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_BRANCH_SHAPE } from '../../../constants/shapes';

const BranchTreeItem = ({ value }) => (
    <div>
        {value.name}
    </div>
);

BranchTreeItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
};

export default BranchTreeItem;
