import PropTypes from 'prop-types';

export const REPOSITORY_SHAPE = {
    id: PropTypes.string,
    path: PropTypes.string,
};

export const REPOSITORY_STATUS_SHAPE = {
    currentBranch: PropTypes.string.isRequired,
    behind: PropTypes.number.isRequired,
    ahead: PropTypes.number.isRequired,
};
