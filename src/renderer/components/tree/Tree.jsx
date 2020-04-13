import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TREE_ITEM_SHAPE } from '../../constants/shapes';
import useTreeStyles from './TreeStyles';

const Tree = ({
    value,
    ItemComponent,
    selected,
    onSelect,
}) => {
    const classes = useTreeStyles();

    return (
        <div className={classes.root}>
            {value.map((v) => {
                if (v.children) {
                    return (
                        <div key={v.id}>
                            <ItemComponent
                                value={v}
                                selected={selected === v.id}
                                onSelect={onSelect}
                            >
                                <Tree
                                    value={v.children}
                                    ItemComponent={ItemComponent}
                                    selected={selected}
                                    onSelect={onSelect}
                                />
                            </ItemComponent>
                        </div>
                    );
                }

                return (
                    <ItemComponent
                        key={v.id}
                        value={v}
                        selected={selected === v.id}
                        onSelect={onSelect}
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
    onSelect: PropTypes.func,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tree.defaultProps = {
    onSelect: null,
    selected: null,
};

export default Tree;
