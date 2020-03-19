import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { produce } from 'immer';

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

const RepositoryListContainer = ({ repositories, setActiveRepository }) => {
    const orderedRepositories = useMemo(
        () => produce(repositories, (repos) => repos.sort((a, b) => a.name.localeCompare(b.name))),
        [repositories],
    );

    return (
        <RepositoryList
            onSetActiveRepository={setActiveRepository}
            repositories={orderedRepositories}
        />
    );
};

RepositoryListContainer.propTypes = {
    setActiveRepository: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_SHAPE)),
};

RepositoryListContainer.defaultProps = {
    repositories: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryListContainer);
