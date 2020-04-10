import PropTypes from 'prop-types';

export const REPOSITORY_SHAPE = {
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
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
    name: PropTypes.string.isRequired,
    path: PropTypes.arrayOf(PropTypes.string).isRequired,
    current: PropTypes.bool.isRequired,
    repositories: PropTypes.shape(REPOSITORY_SHAPE),
};

export const HUNK_LINE_SHAPE = {
    type: PropTypes.oneOf(['normal', 'removed', 'added']),
    line: PropTypes.shape({
        before: PropTypes.number,
        after: PropTypes.number,
    }),
    content: PropTypes.string,
};

export const HUNK_SHAPE = {
    before: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }),
    after: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }),
    lines: PropTypes.arrayOf(PropTypes.shape(HUNK_LINE_SHAPE)),
};

export const REPOSITORY_CHANGE_SHAPE = {
    meta: PropTypes.shape({
        index: PropTypes.shape({
            before: PropTypes.string,
            after: PropTypes.string,
        }),
        mode: PropTypes.shape({
            before: PropTypes.number,
            after: PropTypes.number,
        }),
    }),
    before: PropTypes.string,
    after: PropTypes.string,
    hunks: PropTypes.arrayOf(PropTypes.shape(HUNK_SHAPE)),
};

export const REPOSITORY_CHANGES_SHAPE = {
    staged: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_CHANGE_SHAPE)),
    unstaged: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_CHANGE_SHAPE)),
};
