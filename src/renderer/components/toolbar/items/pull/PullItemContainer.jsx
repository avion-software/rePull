import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PullItem from './PullItem';
import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../../../constants/shapes';
import pullRepository from '../../../../api/repository/pull';
import PullDialog from './PullDialog';

const PullItemContainer = ({ repository, repositoryStatus }) => {
    const [showDialog, setShowDialog] = useState(false);
    const handleClick = useCallback(async () => {
        setShowDialog(true);
    }, [setShowDialog]);

    const handleCloseDialog = useCallback(() => setShowDialog(false), [setShowDialog]);

    const handleConfirmDialog = useCallback(async () => {
        await pullRepository(repository);
        setShowDialog(false);
    }, [setShowDialog, repository]);

    return (
        <>
            <PullDialog
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDialog}
                show={showDialog}
            />
            <PullItem
                onClick={handleClick}
                changes={repositoryStatus?.behind}
            />
        </>
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
