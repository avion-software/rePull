import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from './ExpansionPanel';

const ConnectedExpansionPanel = ({
    title,
    children,
    hideIcon,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    return (
        <ExpansionPanel
            onOpen={handleOpen}
            onClose={handleClose}
            open={open}
            title={title}
            hideIcon={hideIcon}
        >
            {children}
        </ExpansionPanel>
    );
};

ConnectedExpansionPanel.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    hideIcon: PropTypes.bool,
};

ConnectedExpansionPanel.defaultProps = {
    hideIcon: false,
};

export default ConnectedExpansionPanel;
