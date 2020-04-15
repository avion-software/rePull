import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { editor } from 'monaco-editor';

import DiffEditor from './DiffEditor';
import { HUNK_SHAPE } from '../../../constants/shapes';

const CodeChangeEditor = ({ hunk }) => {
    const content = useMemo(() => {
        const retVal = {
            original: '',
            modified: '',
            lineCount: 0,
        };

        hunk.lines.forEach((line) => {
            if (line.type === 'added' || line.type === 'normal') {
                retVal.modified += `${line.content}\n`;
            }

            if (line.type === 'removed' || line.type === 'normal') {
                retVal.original += `${line.content}\n`;
            }

            retVal.lineCount += 1;
        });

        retVal.originalNumber = hunk.before?.from;
        retVal.modifiedNumber = hunk.after?.from;
        retVal.original = editor.createModel(retVal.original);
        retVal.modified = editor.createModel(retVal.modified);

        return retVal;
    }, [hunk]);

    return (
        <DiffEditor
            original={content.original}
            modified={content.modified}
            lineCount={content.lineCount}
            originalLine={content.originalLine}
        />
    );
};

CodeChangeEditor.propTypes = {
    hunk: PropTypes.shape(HUNK_SHAPE).isRequired,
};

export default CodeChangeEditor;
