import React from 'react';
import ToolbarContainer from './toolbar/ToolbarContainer';
import RepositoryListContainer from './repository-list/RepositoryListContainer';
import useAppStyles from './AppStyles';

const App = () => {
    const classes = useAppStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <ToolbarContainer />
            </div>
            <div className={classes.main}>
                <RepositoryListContainer/>
            </div>
        </div>
    );
};

App.propTypes = {

};

export default App;