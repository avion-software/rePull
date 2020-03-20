import React, { useCallback, useMemo } from 'react';
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

const RepositoryListContainer = ({
    repositories,
    setActiveRepository,
    query,
    onRepositorySelected,
}) => {
    const orderedRepositories = useMemo(
        () => produce(repositories, (repos) => repos.sort((a, b) => a.name.localeCompare(b.name))),
        [repositories],
    );

    const queriedRepositories = useMemo(
        () => {
            if (!query) return orderedRepositories;

            const lowerQuery = query.toLowerCase();

            return orderedRepositories
                .filter((repo) => repo.name.toLowerCase().indexOf(lowerQuery) > -1);
        },
        [query, orderedRepositories],
    );

    const handleSetActiveRepository = useCallback((repository) => {
        setActiveRepository(repository);

        if (onRepositorySelected) {
            onRepositorySelected(repository);
        }
    }, [onRepositorySelected, setActiveRepository]);

    return (
        <RepositoryList
            onSetActiveRepository={handleSetActiveRepository}
            repositories={queriedRepositories}
        />
    );
};

RepositoryListContainer.propTypes = {
    setActiveRepository: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_SHAPE)),
    query: PropTypes.string,
    onRepositorySelected: PropTypes.func,
};

RepositoryListContainer.defaultProps = {
    repositories: [],
    query: '',
    onRepositorySelected: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryListContainer);
