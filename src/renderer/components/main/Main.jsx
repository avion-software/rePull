import React from 'react';
import PropTypes from 'prop-types';
import RepositoryListContainer from '../repository-list/RepositoryListContainer';
import { REPOSITORY_SHAPE } from '../../constants/shapes';

const Main = ({ repository }) => {
    if (repository) {
        return null;
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
