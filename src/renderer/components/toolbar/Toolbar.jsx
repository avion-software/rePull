import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';
import ToolbarItem from './ToolbarItem';
import useToolbarStyles from './ToolbarStyles';
import ToolbarCenterItem from './ToolbarCenterItem';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import FetchItemContainer from './items/fetch/FetchItemContainer';

const Toolbar = ({ activeRepository }) => {
    const classes = useToolbarStyles();

    return (
        <div className={classes.toolbar}>
            <div className={classes.left}>
                {activeRepository && (
                    <>
                        <FetchItemContainer repository={activeRepository}/>
                    </>
                )}
            </div>
            <ToolbarCenterItem activeRepository={activeRepository}/>
            <div className={classes.right}>
                <ToolbarItem
                    icon={<FontAwesomeIcon icon={faCog} />}
                    label="Settings"
                />
            </div>
        </div>
    );
};

Toolbar.propTypes = {

};

export default Toolbar;