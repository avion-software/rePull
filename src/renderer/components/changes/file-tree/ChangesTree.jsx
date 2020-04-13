import React from 'react';
import PropTypes from 'prop-types';
import Tree from '../../tree/Tree';
import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';
import ChangeTreeItem from './ChangeTreeItem';

const ChangesTree = ({ changes, selected, onSelect }) => (
    <Tree
        value={changes}
        ItemComponent={ChangeTreeItem}
        selected={selected?.id}
        onSelect={onSelect}
    />
);

ChangesTree.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_CHANGE_SHAPE)),
    selected: PropTypes.shape(REPOSITORY_CHANGE_SHAPE),
    onSelect: PropTypes.func.isRequired,
};

ChangesTree.defaultProps = {
    changes: null,
    selected: null,
};

export default ChangesTree;
