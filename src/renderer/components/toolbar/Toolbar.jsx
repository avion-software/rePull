import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';

import ToolbarItem from './ToolbarItem';
import useToolbarStyles from './ToolbarStyles';
import ToolbarCenterItem from './items/center/ToolbarCenterItem';
import FetchItemContainer from './items/fetch/FetchItemContainer';
import PullItemContainer from './items/pull/PullItemContainer';
import PushItemContainer from './items/push/PushItemContainer';
import { REPOSITORY_SHAPE, REPOSITORY_STATUS_SHAPE } from '../../constants/shapes';

const Toolbar = ({ activeRepository, activeRepositoryStatus }) => {
    const classes = useToolbarStyles();

    return (
        <div className={classes.toolbar}>
            <div className={classes.left}>
                {activeRepository && (
                    <>
                        <FetchItemContainer repository={activeRepository} />
                        <PullItemContainer
                            repository={activeRepository}
                            repositoryStatus={activeRepositoryStatus}
                        />
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
    activeRepository: PropTypes.shape(REPOSITORY_SHAPE),
    activeRepositoryStatus: PropTypes.shape(REPOSITORY_STATUS_SHAPE),
};

Toolbar.defaultProps = {
    activeRepository: null,
    activeRepositoryStatus: null,
};

export default Toolbar;
