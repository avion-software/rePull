import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_SHAPE } from '../../../../constants/shapes';
import Typography from '@material-ui/core/Typography';
import useToolbarCenterItemStyles from './ToolbarCenterItemStyles';
import clsx from 'clsx';

const ToolbarCenterItem = ({ activeRepository, activeRepositoryStatus, className }) => {
    const classes = useToolbarCenterItemStyles();

    return (
        <div className={clsx(className, classes.root)}>
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
    className: PropTypes.string,
};

ToolbarCenterItem.defaultProps = {
    className: null,
};

export default ToolbarCenterItem;