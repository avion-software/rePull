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
                <>
                    {remote.name}
                    <BranchTree
                        key={remote.name}
                        branches={remote.children}
                    />
                </>
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
