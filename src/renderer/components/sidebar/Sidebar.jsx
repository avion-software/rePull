import React from 'react';
import PropTypes from 'prop-types';
import useSidebarStyles from './SidebarStyles';
import { REPOSITORY_BRANCH_SHAPE } from '../../constants/shapes';
import BranchTree from './branch-tree/BranchTree';
import RemoteBranches from './remote-branches/RemoteBranches';
import SidebarSection from './sidebar-section/SidebarSection';
import ScrollArea from '../scroll-area/ScrollArea';

const Sidebar = ({ branches }) => {
    const classes = useSidebarStyles();

    return (
        <ScrollArea className={classes.root}>
            {branches?.local && (
                <SidebarSection name="Local">
                    <BranchTree
                        branches={branches.local}
                    />
                </SidebarSection>
            )}
            {branches?.remotes && (
                <RemoteBranches
                    remoteBranches={branches.remotes}
                />
            )}
        </ScrollArea>
    );
};

Sidebar.propTypes = {
    branches: PropTypes.shape({
        local: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE)).isRequired,
        remotes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE))),
    }),
};

Sidebar.defaultProps = {
    branches: null,
};

export default Sidebar;
