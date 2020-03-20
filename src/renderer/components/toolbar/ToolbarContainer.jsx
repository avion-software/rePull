import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { getRepository } from '../../store/reducers/repositories/selectors';
import Toolbar from './Toolbar';
import { getRepositoryStatus } from '../../store/reducers/repository-status/selectors';
import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../constants/shapes';
import { setShowActionOverlay as setShowActionOverlayAction } from '../../store/reducers/selections/actions';

const mapStateToProps = (state) => ({
    activeRepository: getRepository(state, getActiveRepository(state)),
    activeRepositoryStatus: getRepositoryStatus(state, getActiveRepository(state)),
});

const mapDispatchToProps = ({
    setShowActionOverlay: setShowActionOverlayAction,
});

const ToolbarContainer = ({ activeRepository, activeRepositoryStatus, setShowActionOverlay }) => {
    const handleCenterClick = useCallback(() => {
        setShowActionOverlay(true);
    }, [setShowActionOverlay]);

    return (
        <Toolbar
            onCenterClick={handleCenterClick}
            activeRepository={activeRepository}
            activeRepositoryStatus={activeRepositoryStatus}
        />
    );
};

ToolbarContainer.propTypes = {
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
    activeRepositoryStatus: PropTypes.shape(REPOSITORY_STATUS_SHAPE),
    setShowActionOverlay: PropTypes.func.isRequired,
};

ToolbarContainer.defaultProps = {
    activeRepository: null,
    activeRepositoryStatus: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);
