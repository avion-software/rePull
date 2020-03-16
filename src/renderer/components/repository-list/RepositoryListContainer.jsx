import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepositories } from '../../store/reducers/repositories/selectors';
import { REPOSITORY_SHAPE } from '../../constants/shapes';
import RepositoryList from './RepositoryList';
import { setActiveRepository as setActiveRepositoryAction } from '../../store/reducers/selections/actions';

const mapStateToProps = (state) => ({
    repositories: getRepositories(state),
});

const mapDispatchToProps = ({
    setActiveRepository: setActiveRepositoryAction,
});

const RepositoryListContainer = ({ repositories, setActiveRepository }) => (
    <RepositoryList
        onSetActiveRepository={setActiveRepository}
        repositories={repositories}
    />
);

RepositoryListContainer.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_SHAPE)),
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryListContainer);
