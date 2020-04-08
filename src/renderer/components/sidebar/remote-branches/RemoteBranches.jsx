import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import BranchTree from '../branch-tree/BranchTree';
import SidebarSection from '../sidebar-section/SidebarSection';
import { REPOSITORY_BRANCH_SHAPE } from '../../../constants/shapes';

const RemoteBranches = ({ remoteBranches }) => {
    const remotes = useMemo(() => Object.entries(remoteBranches).map(([name, children]) => ({
        name,
        children,
    })), [remoteBranches]);

    return (
        <SidebarSection name="Remotes">
            {remotes.map((remote) => (
                <div key={remote.name}>
                    {remote.name}
                    <BranchTree
                        branches={remote.children}
                    />
                </div>
            ))}
        </SidebarSection>
    );
};

RemoteBranches.propTypes = {
    remoteBranches: PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE)),
    ).isRequired,
};

export default RemoteBranches;
