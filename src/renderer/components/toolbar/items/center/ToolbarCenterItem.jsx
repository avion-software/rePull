import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../../../constants/shapes';
import useToolbarCenterItemStyles from './ToolbarCenterItemStyles';

const ToolbarCenterItem = ({
    activeRepository,
    activeRepositoryStatus,
    className,
    onClick,
}) => {
    const classes = useToolbarCenterItemStyles();

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.rootClickable]: onClick,
            })}
            onClick={onClick}
        >
            <Typography variant="h1" className={classes.name}>
                {activeRepository?.name}
            </Typography>
            <Typography className={classes.branch}>
                {activeRepositoryStatus?.currentBranch}
            </Typography>
        </div>
    );
};

ToolbarCenterItem.propTypes = {
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
    activeRepositoryStatus: PropTypes.shape(REPOSITORY_STATUS_SHAPE),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

ToolbarCenterItem.defaultProps = {
    className: null,
    activeRepository: null,
    activeRepositoryStatus: null,
    onClick: null,
};

export default ToolbarCenterItem;
