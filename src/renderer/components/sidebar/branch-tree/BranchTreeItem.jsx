import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_BRANCH_SHAPE } from '../../../constants/shapes';
import ConnectedExpansionPanel from '../../expansion-panel/ConnectedExpansionPanel';
import useBranchTreeItemStyles from './BranchTreeItemStyles';

const BranchTreeItem = ({ value, children }) => {
    const classes = useBranchTreeItemStyles();

    return (
        <ConnectedExpansionPanel title={value.name} hideIcon={!children} open>
            <div className={classes.children}>
                {children}
            </div>
        </ConnectedExpansionPanel>
    );
};

BranchTreeItem.propTypes = {
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

BranchTreeItem.defaultProps = {
    children: null,
};

export default BranchTreeItem;
