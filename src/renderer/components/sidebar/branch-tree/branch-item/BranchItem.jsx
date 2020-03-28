import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useBranchItemStyles from './BranchItemStyles';
import { REPOSITORY_BRANCH_SHAPE } from '../../../../constants/shapes';

const BranchItem = ({ value }) => {
    const classes = useBranchItemStyles();

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: value.current,
            })}
        >
            {value.name}
        </div>
    );
};

BranchItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
};

export default BranchItem;
