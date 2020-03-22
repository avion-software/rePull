import React from 'react';
import ToolbarContainer from './toolbar/ToolbarContainer';
import RepositoryListContainer from './repository-list/RepositoryListContainer';
import useAppStyles from './AppStyles';
import ActionOverlayContainer from './action-overlay/ActionOverlayContainer';
import SidebarContainer from './sidebar/SidebarContainer';

const App = () => {
    const classes = useAppStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <ToolbarContainer />
            </div>
            <div className={classes.mainWrapper}>
                <div className={classes.sidebar}>
                    <SidebarContainer />
                </div>
                <div className={classes.main}>
                    <RepositoryListContainer />
                </div>
            </div>
            <ActionOverlayContainer />
        </div>
    );
};

App.propTypes = {
};

export default App;
