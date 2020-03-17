import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useToolbarItemStyles from './ToolbarItemStyles';

const ToolbarItem = ({ icon, label, onClick }) => {
    const classes = useToolbarItemStyles();

    return (
        <div
            className={classes.root}
            onClick={onClick}
        >
            <div className={classes.icon}>
                {icon}
            </div>
            <Typography className={classes.label}>
                {label}
            </Typography>
        </div>
    );
};

ToolbarItem.propTypes = {
    onClick: PropTypes.func,
};

ToolbarItem.defaultProps = {
    onClick: null,
};

export default ToolbarItem;