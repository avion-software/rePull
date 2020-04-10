import React from 'react';
import PropTypes from 'prop-types';
import RepositoryListContainer from '../repository-list/RepositoryListContainer';
import { REPOSITORY_SHAPE } from '../../constants/shapes';
import ChangesContainer from '../changes/ChangesContainer';

const Main = ({ repository }) => {
    if (repository) {
        return (
            <ChangesContainer
                repository={repository}
            />
        );
    }

    return (
        <RepositoryListContainer />
    );
};

Main.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE),
};

Main.defaultProps = {
    repository: null,
};

export default Main;
