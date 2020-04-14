import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepositoryChanges } from '../../store/reducers/repository-changes/selectors';
import { REPOSITORY_CHANGES_SHAPE, REPOSITORY_SHAPE } from '../../constants/shapes';
import CommitInputContainer from '../commit/commit-input/CommitInputContainer';
import useChangesStyles from './ChangesStyles';
import ChangesTreeContainer from './file-tree/ChangesTreeContainer';

const mapStateToProps = (state, props) => ({
    repositoryChanges: getRepositoryChanges(state, props.repository.id),
});

const ChangesContainer = ({ repositoryChanges }) => {
    const classes = useChangesStyles();

    const [unstagedSelected, setUnstagedSelected] = useState(null);
    const [stagedSelected, setStagedSelected] = useState(null);

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.files}>
                    <div className={classes.filesStaged}>
                        {repositoryChanges?.staged && (
                            <ChangesTreeContainer
                                onSelect={setStagedSelected}
                                selected={stagedSelected}
                                changes={repositoryChanges?.staged}
                            />
                        )}
                    </div>
                    <div className={classes.filesUnstaged}>
                        {repositoryChanges?.unstaged && (
                            <ChangesTreeContainer
                                onSelect={setUnstagedSelected}
                                selected={unstagedSelected}
                                changes={repositoryChanges?.unstaged}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.bottomBar}>
                <CommitInputContainer />
            </div>
        </div>
    );
};

ChangesContainer.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
    repositoryChanges: PropTypes.shape(REPOSITORY_CHANGES_SHAPE),
};

ChangesContainer.defaultProps = {
    repositoryChanges: null,
};

export default connect(mapStateToProps)(ChangesContainer);
