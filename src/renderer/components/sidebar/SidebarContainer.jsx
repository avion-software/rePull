import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import { getRepositoryBranches } from '../../store/reducers/repository-branches/selectors';
import { REPOSITORY_BRANCH_SHAPE } from '../../constants/shapes';
import { getActiveRepository } from '../../store/reducers/selections/selectors';

const mapStateToProps = (state) => ({
    branches: getRepositoryBranches(state, getActiveRepository(state)),
});

const SidebarContainer = ({ branches }) => (
    <Sidebar branches={branches} />
);

SidebarContainer.propTypes = {
    branches: PropTypes.shape({
        local: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE)).isRequired,
        remotes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE))),
    }),
};

SidebarContainer.defaultProps = {
    branches: null,
};

export default connect(mapStateToProps)(SidebarContainer);
