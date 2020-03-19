import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { DialogContent } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStateWithRef from '../../../../utils/hooks/useStateWithRef';

const PullDialog = ({ show, onClose, onConfirm }) => {
    const [rebase, setRebase, rebaseRef] = useStateWithRef(true);

    const handleConfirm = useCallback(() => {
        onConfirm({
            rebase: !!rebaseRef.current,
        });
    }, [onConfirm, rebaseRef]);

    const handleRebaseChange = useCallback((event) => {
        setRebase(event.target.checked);
    }, [setRebase]);

    return (
        <Dialog onClose={onClose} open={show}>
            <DialogTitle>Pull changes</DialogTitle>
            <DialogContent>
                <FormControlLabel
                    control={(
                        <Checkbox
                            checked={rebase}
                            onChange={handleRebaseChange}
                        />
                    )}
                    label="Rebase instead of merge"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Abort
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Pull
                </Button>
            </DialogActions>
        </Dialog>
    );
};

PullDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default PullDialog;
