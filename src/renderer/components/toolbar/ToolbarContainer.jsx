import React from 'react';
import { connect } from 'react-redux';

import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { getRepository } from '../../store/reducers/repositories/selectors';
import Toolbar from './Toolbar';

const mapStateToProps = (state) => ({
    activeRepository: getRepository(state, getActiveRepository(state)),
});

const ToolbarContainer = ({ activeRepository }) => (
    <Toolbar
        activeRepository={activeRepository}
    />
);

ToolbarContainer.propTypes = {

};

export default connect(mapStateToProps)(ToolbarContainer);
