import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { getRepository } from '../../store/reducers/repositories/selectors';
import Toolbar from './Toolbar';
import { getRepositoryStatus } from '../../store/reducers/repository-status/selectors';
import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../constants/shapes';

const mapStateToProps = (state) => ({
    activeRepository: getRepository(state, getActiveRepository(state)),
    activeRepositoryStatus: getRepositoryStatus(state, getActiveRepository(state)),
});

const ToolbarContainer = ({ activeRepository, activeRepositoryStatus }) => (
    <Toolbar
        activeRepository={activeRepository}
        activeRepositoryStatus={activeRepositoryStatus}
    />
);

ToolbarContainer.propTypes = {
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
    activeRepositoryStatus: PropTypes.shape(REPOSITORY_STATUS_SHAPE),
};

ToolbarContainer.defaultProps = {
    activeRepository: null,
    activeRepositoryStatus: null,
};

export default connect(mapStateToProps)(ToolbarContainer);
