import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PullItem from './PullItem';
import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../../../constants/shapes';
import pullRepository from '../../../../api/repository/pull';

const PullItemContainer = ({ repository, repositoryStatus }) => {
    const handleClick = useCallback(async () => {
        await pullRepository(repository);
    }, [repository]);

    return (
        <PullItem
            onClick={handleClick}
            changes={repositoryStatus?.behind}
        />
    );
};

PullItemContainer.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
    repositoryStatus: PropTypes.shape(REPOSITORY_STATUS_SHAPE),
};

PullItemContainer.defaultProps = {
    repositoryStatus: null,
};

export default PullItemContainer;
