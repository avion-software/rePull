import React from 'react';
import PropTypes from 'prop-types';
import useSidebarStyles from './SidebarStyles';

const Sidebar = props => {
    const classes = useSidebarStyles();

    return (
        <div className={classes.root}>
            Hello Sidebar
        </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;
