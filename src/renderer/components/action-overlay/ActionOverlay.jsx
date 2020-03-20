import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

import RepositoryListContainer from '../repository-list/RepositoryListContainer';

const INPUT_PROPS = {
    endAdornment: (
        <InputAdornment position="end">
            <FontAwesomeIcon icon={faSearch} />
        </InputAdornment>
    ),
};

const ActionOverlay = ({ show, onClose }) => {
    const [search, setSearch] = useState('');
    const handleChange = useCallback((event) => {
        setSearch(event.target.value);
    }, [setSearch]);

    const handleRepositorySelected = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setSearch('');
        }
    }, [setSearch, show]);

    return (
        <Dialog open={show} onClose={onClose} fullWidth>
            <TextField
                style={{ padding: 15 }}
                onChange={handleChange}
                value={search}
                autoFocus
                InputProps={INPUT_PROPS}
            />
            <div style={{ height: 200, overflow: 'auto' }}>
                <RepositoryListContainer
                    query={search}
                    onRepositorySelected={handleRepositorySelected}
                />
            </div>
        </Dialog>
    );
};

ActionOverlay.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ActionOverlay;
