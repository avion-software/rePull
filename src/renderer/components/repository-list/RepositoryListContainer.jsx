import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepositories } from '../../store/reducers/repositories/selectors';
import { REPOSITORY_SHAPE } from '../../constants/shapes';

const mapStateToProps = (state) => ({
    repositories: getRepositories(state),
});

const RepositoryListContainer = ({ repositories }) => {
    console.log(repositories);
    return (
        <div>
            Repos
        </div>
    );
};

RepositoryListContainer.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_SHAPE)),
};

export default connect(mapStateToProps)(RepositoryListContainer);
