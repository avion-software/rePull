import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import RepositoryItem from './repository-item/RepositoryItem';
import { REPOSITORY_SHAPE } from '../../constants/shapes';

const RepositoryList = ({ repositories, onSetActiveRepository }) => (
    <List>
        {repositories.map((repository) => (
            <RepositoryItem
                key={repository.id}
                repository={repository}
                onClick={onSetActiveRepository}
            />
        ))}
    </List>
);

RepositoryList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_SHAPE)),
    onSetActiveRepository: PropTypes.func,
};

RepositoryList.defaultProps = {
    repositories: [],
    onSetActiveRepository: null,
};

export default RepositoryList;
