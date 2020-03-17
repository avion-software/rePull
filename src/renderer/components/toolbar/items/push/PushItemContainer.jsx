import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PushItem from './PushItem';
import { REPOSITORY_SHAPE } from '../../../../constants/shapes';
import pushRepository from '../../../../api/repository/push';

const PushItemContainer = ({ repository }) => {
    const handleClick = useCallback(async () => {
        await pushRepository(repository.id, 'origin', 'master');
        console.log('pushed');
    }, [repository]);

    return (
        <PushItem onClick={handleClick}/>
    );
};

PushItemContainer.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
};

export default PushItemContainer;
