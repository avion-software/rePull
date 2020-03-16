import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';
import ToolbarItem from './ToolbarItem';
import useToolbarStyles from './ToolbarStyles';

const Toolbar = props => {
    const classes = useToolbarStyles();

    return (
        <div className={classes.toolbar}>
            <ToolbarItem
                icon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
                label="Pull"
            />
        </div>
    );
};

Toolbar.propTypes = {

};

export default Toolbar;