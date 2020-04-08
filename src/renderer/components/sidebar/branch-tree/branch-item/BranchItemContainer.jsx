import React from 'react';
import PropTypes from 'prop-types';
import BranchItem from './BranchItem';
import { REPOSITORY_BRANCH_SHAPE } from '../../../../constants/shapes';

const BranchItemContainer = ({ value }) => (
    <BranchItem
        value={value}
    />
);

BranchItemContainer.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
};

export default BranchItemContainer;
