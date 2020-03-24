import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CSSTransition from 'react-transition-group/CSSTransition';

import useExpansionPanelStyles from './ExpansionPanelStyles';
import useExpansionAnimationStyles from './ExpansionAnimationStyles';

const ExpansionPanel = ({
    title,
    children,
    open,
    onOpen,
    onClose,
    hideIcon,
}) => {
    const classes = useExpansionPanelStyles();
    const animationClasses = useExpansionAnimationStyles();

    const classNames = useMemo(() => ({
        appear: animationClasses.appear,
        appearActive: animationClasses.appearActive,
        appearDone: animationClasses.appearDone,
        enter: animationClasses.enter,
        enterActive: animationClasses.enterActive,
        enterDone: animationClasses.enterDone,
        exit: animationClasses.exit,
        exitActive: animationClasses.exitActive,
        exitDone: animationClasses.exitDone,
    }), [animationClasses]);

    return (
        <div>
            <div
                className={classes.head}
            >
                <div onClick={open ? onClose : onOpen} className={classes.iconWrapper}>
                    {!hideIcon && (
                        <FontAwesomeIcon
                            className={clsx(classes.icon, {
                                [classes.open]: open,
                            })}
                            icon={faChevronRight}
                        />
                    )}
                </div>
                <div className={classes.title}>{title}</div>
            </div>
            <div>
                <CSSTransition
                    in={open}
                    timeout={500}
                    className={animationClasses.root}
                    classNames={classNames}
                >
                    <div>
                        {children}
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

ExpansionPanel.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    open: PropTypes.bool,
    hideIcon: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
};

ExpansionPanel.defaultProps = {
    open: false,
    hideIcon: false,
    onOpen: null,
    onClose: null,
};

export default ExpansionPanel;
