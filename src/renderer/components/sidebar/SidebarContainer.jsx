import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import { getRepositoryBranches } from '../../store/reducers/repository-branches/selectors';
import { REPOSITORY_BRANCH_SHAPE, REPOSITORY_SHAPE } from '../../constants/shapes';
import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { getRepository } from '../../store/reducers/repositories/selectors';

const mapStateToProps = (state) => ({
    repository: getRepository(state, getActiveRepository(state)),
    branches: getRepositoryBranches(state, getActiveRepository(state)),
});

const SidebarContainer = ({ branches, repository }) => (
    <Sidebar
        branches={branches}
        repository={repository}
    />
);

SidebarContainer.propTypes = {
    branches: PropTypes.shape({
        local: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE)).isRequired,
        remotes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE))),
    }),
    repository: PropTypes.shape(REPOSITORY_SHAPE),
};

SidebarContainer.defaultProps = {
    branches: null,
    repository: null,
};

export default connect(mapStateToProps)(SidebarContainer);
