import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';
import ToolbarItem from './ToolbarItem';
import useToolbarStyles from './ToolbarStyles';
import ToolbarCenterItem from './ToolbarCenterItem';

const Toolbar = ({ activeRepository }) => {
    const classes = useToolbarStyles();

    return (
        <div className={classes.toolbar}>
            <ToolbarItem
                icon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
                label="Pull"
            />
            <ToolbarCenterItem activeRepository={activeRepository}/>
        </div>
    );
};

Toolbar.propTypes = {

};

export default Toolbar;