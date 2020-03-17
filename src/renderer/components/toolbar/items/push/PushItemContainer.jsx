import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PushItem from './PushItem';
import { REPOSITORY_SHAPE } from '../../../../constants/shapes';
import pushRepository from '../../../../api/repository/push';

const PushItemContainer = ({ repository, repositoryStatus }) => {
    const handleClick = useCallback(async () => {
        await pushRepository(repository, { remote: 'origin', branch: 'master' });
    }, [repository]);

    return (
        <PushItem
            onClick={handleClick}
            changes={repositoryStatus?.ahead}
        />
    );
};

PushItemContainer.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
};

export default PushItemContainer;
