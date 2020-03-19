import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import FetchItem from './FetchItem';
import { REPOSITORY_SHAPE } from '../../../../constants/shapes';
import fetchRepository from '../../../../api/repository/fetch';

const FetchItemContainer = ({ repository }) => {
    const handleClick = useCallback(async () => {
        await fetchRepository(repository);
    }, [repository]);

    return (
        <FetchItem onClick={handleClick} />
    );
};

FetchItemContainer.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
};

export default FetchItemContainer;
