import React from 'react';
import PropTypes from 'prop-types';
import Tree from '../../tree/Tree';
import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';
import ChangeTreeItem from './ChangeTreeItem';

const ChangesTree = ({ changes }) => (
    <Tree
        value={changes}
        ItemComponent={ChangeTreeItem}
    />
);

ChangesTree.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_CHANGE_SHAPE)),
};

ChangesTree.defaultProps = {
    changes: null,
};

export default ChangesTree;
