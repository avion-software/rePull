import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useScrollAreaStyles from './ScrollAreaStyles';

const ScrollArea = ({ children, className }) => {
    const classes = useScrollAreaStyles();

    return (
        <div className={clsx(className, classes.root)}>
            <div>
                {children}
            </div>
        </div>
    );
};

ScrollArea.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
};

ScrollArea.defaultProps = {
    className: null,
};

export default ScrollArea;
