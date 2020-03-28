import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_BRANCH_SHAPE } from '../../../constants/shapes';
import ConnectedExpansionPanel from '../../expansion-panel/ConnectedExpansionPanel';
import useBranchTreeItemStyles from './BranchTreeItemStyles';
import BranchItemContainer from './branch-item/BranchItemContainer';

const BranchTreeItem = ({ value, children }) => {
    const classes = useBranchTreeItemStyles();

    if (children) {
        return (
            <ConnectedExpansionPanel title={value.name} open>
                <div className={classes.children}>
                    {children}
                </div>
            </ConnectedExpansionPanel>
        );
    }

    return (
        <BranchItemContainer
            value={value}
        />
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
