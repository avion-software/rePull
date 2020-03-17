import React from 'react';
import { connect } from 'react-redux';

import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { getRepository } from '../../store/reducers/repositories/selectors';
import Toolbar from './Toolbar';
import { getRepositoryStatus } from '../../store/reducers/repository-status/selectors';

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

};

export default connect(mapStateToProps)(ToolbarContainer);
