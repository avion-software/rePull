import React from 'react';
import PropTypes from 'prop-types';
import CodeChangeEditor from '../../editor/code-change-editor/CodeChangeEditor';
import { REPOSITORY_CHANGE_SHAPE } from '../../../constants/shapes';

const CodeChangesContainer = ({ selected }) => (
    <div>
        {selected?.hunks.map((hunk) => (
            <CodeChangeEditor hunk={hunk} />
        ))}
    </div>
);

CodeChangesContainer.propTypes = {
    selected: PropTypes.shape(REPOSITORY_CHANGE_SHAPE).isRequired,
};

export default CodeChangesContainer;
