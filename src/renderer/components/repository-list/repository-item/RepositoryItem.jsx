import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { REPOSITORY_SHAPE } from '../../../constants/shapes';

const RepositoryItem = ({ repository, onClick }) => {
    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(repository);
        }
    }, [onClick, repository]);

    return (
        <ListItem
            onClick={handleClick}
            button
        >
            <ListItemText
                primary={repository.name}
                secondary={repository.path}
            />
        </ListItem>
    );
};

RepositoryItem.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE),
    onClick: PropTypes.func,
};

export default RepositoryItem;
