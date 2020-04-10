import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepositoryChanges } from '../../store/reducers/repository-changes/selectors';
import { REPOSITORY_SHAPE } from '../../constants/shapes';
import CommitInputContainer from '../commit/commit-input/CommitInputContainer';
import useChangesStyles from './ChangesStyles';

const mapStateToProps = (state, props) => ({
    repositoryChanges: getRepositoryChanges(state, props.repository.id),
});

const ChangesContainer = ({ repositoryChanges }) => {
    const classes = useChangesStyles();

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                Test
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
};

export default connect(mapStateToProps)(ChangesContainer);
