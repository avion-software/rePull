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

export const TREE_ITEM_SHAPE = {
};

TREE_ITEM_SHAPE.children = PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape(TREE_ITEM_SHAPE),
    PropTypes.object,
])).isRequired;

export const REPOSITORY_BRANCH_SHAPE = {
    name: PropTypes.string,
    path: PropTypes.arrayOf(PropTypes.string),
    current: PropTypes.bool,
};
