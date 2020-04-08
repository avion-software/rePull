import React from 'react';
import PropTypes from 'prop-types';
import useSidebarSectionStyles from './SidebarSectionStyles';

const SidebarSection = ({ name, children }) => {
    const classes = useSidebarSectionStyles();

    return (
        <>
            <div className={classes.name}>
                {name}
            </div>
            {children}
        </>
    );
};

SidebarSection.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

export default SidebarSection;
