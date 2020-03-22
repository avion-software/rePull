import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TREE_ITEM_SHAPE } from '../../constants/shapes';
import useTreeStyles from './TreeStyles';

const Tree = ({ value, ItemComponent }) => {
    const classes = useTreeStyles();

    return (
        <div className={classes.root}>
            {value.map((v) => {
                if (v.children) {
                    return (
                        <div key={v.id}>
                            <ItemComponent
                                value={v}
                            />
                            <Tree
                                value={v.children}
                                ItemComponent={ItemComponent}
                            />
                        </div>
                    );
                }

                return (
                    <ItemComponent
                        key={v.id}
                        value={v}
                    />
                );
            })}
        </div>
    );
};

Tree.propTypes = {
    value: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape(TREE_ITEM_SHAPE),
        PropTypes.object,
    ])).isRequired,
    ItemComponent: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
    ]).isRequired,
};

export default Tree;
