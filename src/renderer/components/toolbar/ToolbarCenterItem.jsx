import React from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_SHAPE } from '../../constants/shapes';
import Typography from '@material-ui/core/Typography';
import useToolbarCenterItemStyles from './ToolbarCenterItemStyles';

const ToolbarCenterItem = ({ activeRepository }) => {
    const classes = useToolbarCenterItemStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1" className={classes.name}>
                {activeRepository?.name}
            </Typography>
        </div>
    );
};

ToolbarCenterItem.propTypes = {
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
};

export default ToolbarCenterItem;