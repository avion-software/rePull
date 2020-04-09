import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from './Main';
import { getActiveRepository } from '../../store/reducers/selections/selectors';
import { REPOSITORY_SHAPE } from '../../constants/shapes';
import { getRepository } from '../../store/reducers/repositories/selectors';

const mapStateToProps = (state) => ({
    activeRepository: getRepository(state, getActiveRepository(state)),
});

const MainContainer = ({ activeRepository }) => (
    <Main
        repository={activeRepository}
    />
);

MainContainer.propTypes = {
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
};

MainContainer.defaultProps = {
    activeRepository: null,
};

export default connect(mapStateToProps)(MainContainer);
