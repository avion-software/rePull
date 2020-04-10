import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useCommitInputStyles from './CommitInputStyles';

const CommitInput = ({
    summary,
    description,
    onSummaryChange,
    onDescriptionChange,
    onCommit,
}) => {
    const classes = useCommitInputStyles();

    return (
        <div className={classes.root}>
            <Input
                value={summary}
                onChange={onSummaryChange}
                placeholder="Summary"
            />
            <TextField
                value={description}
                onChange={onDescriptionChange}
                placeholder="Description"
                rows="3"
                multiline
            />
            <div className={classes.commitButtonWrapper}>
                <Button
                    onClick={onCommit}
                    variant="contained"
                    color="primary"
                >
                    Commit
                </Button>
            </div>
        </div>
    );
};

CommitInput.propTypes = {
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onSummaryChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    onCommit: PropTypes.func.isRequired,
};

export default CommitInput;
