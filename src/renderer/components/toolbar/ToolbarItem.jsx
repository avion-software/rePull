import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const ToolbarItem = ({ icon, label }) => {
    return (
        <div>
            <div>
                {icon}
            </div>
            <Typography>
                {label}
            </Typography>
        </div>
    );
};

ToolbarItem.propTypes = {

};

export default ToolbarItem;