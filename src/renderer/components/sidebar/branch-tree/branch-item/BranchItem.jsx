import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useBranchItemStyles from './BranchItemStyles';
import { REPOSITORY_BRANCH_SHAPE } from '../../../../constants/shapes';
import useContextMenu from '../../../context-menu/useContextMenu';

const BranchItem = ({ value }) => {
    const classes = useBranchItemStyles();
    const [showContextMenu, ContextComponent] = useContextMenu();

    return (
        <>
            <ContextComponent />
            <div
                className={clsx(classes.root, {
                    [classes.active]: value.current,
                })}
                onContextMenu={showContextMenu}
            >
                {value.name}
            </div>
        </>
    );
};

BranchItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
};

export default BranchItem;
