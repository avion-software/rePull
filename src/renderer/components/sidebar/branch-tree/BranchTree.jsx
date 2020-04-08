import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { REPOSITORY_BRANCH_SHAPE, REPOSITORY_SHAPE } from '../../../constants/shapes';
import mapTree from '../../../utils/tree/mapTree';
import Tree from '../../tree/Tree';
import BranchTreeItem from './BranchTreeItem';

const BranchTree = ({ branches, repository }) => {
    const branchTree = useMemo(() => {
        const retVal = {};

        branches.forEach((branch) => {
            let currentPosition = retVal;

            const lastIndex = branch.path.length - 1;
            branch.path.forEach((pathSegment, index) => {
                const isLast = (lastIndex === index);
                if (isLast) {
                    currentPosition[pathSegment] = branch;
                    return;
                }

                if (!currentPosition?.[pathSegment]?.children) {
                    currentPosition[pathSegment] = currentPosition[pathSegment] || {};
                    currentPosition[pathSegment].name = pathSegment;
                    currentPosition[pathSegment].children = {};
                }

                currentPosition = currentPosition[pathSegment].children;
            });
        });

        return mapTree({ children: retVal }, [], (path, entry) => {
            if (!entry.children) {
                return {
                    id: entry.name,
                    ...entry,
                    name: entry.path[entry.path.length - 1],
                    repository,
                };
            }

            const rVal = {
                id: entry.name,
                ...entry,
            };

            rVal.children = Object.values(rVal.children);

            return rVal;
        }).children;
    }, [branches, repository]);

    return (
        <Tree
            value={branchTree}
            ItemComponent={BranchTreeItem}
        />
    );
};

BranchTree.propTypes = {
    branches: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_BRANCH_SHAPE)).isRequired,
    repository: PropTypes.shape(REPOSITORY_SHAPE),
};

BranchTree.defaultProps = {
    repository: null,
};

export default BranchTree;
