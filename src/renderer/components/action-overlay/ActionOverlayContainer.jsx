import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mousetrap from 'mousetrap';

import ActionOverlay from './ActionOverlay';
import { getShowActionOverlay } from '../../store/reducers/selections/selectors';
import { setShowActionOverlay as setShowActionOverlayAction } from '../../store/reducers/selections/actions';

const mapStateToProps = (state) => ({
    show: getShowActionOverlay(state),
});

const mapDispatchToProps = ({
    setShowActionOverlay: setShowActionOverlayAction,
});

const ActionOverlayContainer = ({ show, setShowActionOverlay }) => {
    const handleClose = useCallback(() => {
        setShowActionOverlay(false);
    }, [setShowActionOverlay]);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();

            setShowActionOverlay(true);
        };

        Mousetrap.bind('^ ^', handler);

        return () => {
            Mousetrap.unbind('^ ^');
        };
    }, [setShowActionOverlay]);

    return (
        <ActionOverlay
            show={show}
            onClose={handleClose}
        />
    );
};

ActionOverlayContainer.propTypes = {
    show: PropTypes.bool.isRequired,
    setShowActionOverlay: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionOverlayContainer);
