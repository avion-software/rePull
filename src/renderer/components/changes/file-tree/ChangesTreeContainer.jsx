import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import mapTree from '../../../utils/tree/mapTree';
import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';
import ChangesTree from './ChangesTree';

const ChangesTreeContainer = ({ changes }) => {
    const changeTree = useMemo(() => {
        const retVal = {};

        if (!changes?.length) {
            return {};
        }

        changes.forEach((change) => {
            let currentPosition = retVal;

            const path = change.after?.split('/') || change.before?.split('/') || [];

            const lastIndex = path.length - 1;
            path.forEach((pathSegment, index) => {
                const isLast = (lastIndex === index);
                if (isLast) {
                    currentPosition[pathSegment] = {
                        ...change,
                        path,
                    };
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
                };
            }

            const rVal = {
                id: entry.name,
                ...entry,
            };

            rVal.children = Object.values(rVal.children);

            return rVal;
        }).children;
    }, [changes]);

    return (
        <ChangesTree
            changes={changeTree}
        />
    );
};

ChangesTreeContainer.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.shape(REPOSITORY_CHANGE_SHAPE)),
};

ChangesTreeContainer.defaultProps = {
    changes: null,
};

export default ChangesTreeContainer;
