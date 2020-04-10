import React, { useCallback, useState } from 'react';
import CommitInput from './CommitInput';

const CommitInputContainer = () => {
    const [commitInfo, setCommitInfo] = useState({
        summary: '',
        description: '',
    });

    const handleSummaryChange = useCallback((event) => {
        const { value } = event.target;
        setCommitInfo((info) => ({
            ...info,
            summary: value,
        }));
    }, [setCommitInfo]);

    const handleDescriptionChange = useCallback((event) => {
        const { value } = event.target;
        setCommitInfo((info) => ({
            ...info,
            description: value,
        }));
    }, [setCommitInfo]);

    const handleCommit = useCallback(() => {
        setCommitInfo((commit) => {
            console.log(commit);

            return {
                summary: '',
                description: '',
            };
        });
    }, [setCommitInfo]);

    return (
        <CommitInput
            onSummaryChange={handleSummaryChange}
            summary={commitInfo.summary}
            onDescriptionChange={handleDescriptionChange}
            description={commitInfo.description}
            onCommit={handleCommit}
        />
    );
};

CommitInputContainer.propTypes = {

};

export default CommitInputContainer;
