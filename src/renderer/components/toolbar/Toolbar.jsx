import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';
import ToolbarItem from './ToolbarItem';
import useToolbarStyles from './ToolbarStyles';
import ToolbarCenterItem from './items/center/ToolbarCenterItem';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import FetchItemContainer from './items/fetch/FetchItemContainer';
import PullItemContainer from './items/pull/PullItemContainer';
import PushItemContainer from './items/push/PushItemContainer';

const Toolbar = ({ activeRepository, activeRepositoryStatus }) => {
    const classes = useToolbarStyles();

    return (
        <div className={classes.toolbar}>
            <div className={classes.left}>
                {activeRepository && (
                    <>
                        <FetchItemContainer repository={activeRepository}/>
                        <PullItemContainer repository={activeRepository}/>
                        <PushItemContainer
                            repository={activeRepository}
                            repositoryStatus={activeRepositoryStatus}
                        />
                    </>
                )}
            </div>
            <ToolbarCenterItem
                activeRepository={activeRepository}
                activeRepositoryStatus={activeRepositoryStatus}
            />
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