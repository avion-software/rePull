import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { editor } from 'monaco-editor';

const LINE_HEIGHT = 18;

const DiffEditor = ({
    original,
    modified,
    originalLine,
    lineCount,
}) => {
    const ref = useRef(null);
    const diffEditor = useRef(null);
    const prevLineCount = useRef(-1);

    useEffect(() => {
        if (!ref.current) return;

        diffEditor.current = editor.createDiffEditor(ref.current, {
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'off',
            enableSplitViewResizing: false,
            renderSideBySide: false,
            readOnly: true,
            theme: 'vs-dark',
            overviewRulerBorder: false,
            lineNumbers: (originalLineNumber, ...args) => {
                console.log(args, originalLine);
                return originalLineNumber;
            },
        });
    }, [ref.current, prevLineCount, diffEditor]);

    useEffect(() => {
        if (!diffEditor.current) return;

        diffEditor.current.setModel({
            original,
            modified,
        });

        const height = lineCount * LINE_HEIGHT;

        ref.current.style.height = `${height}px`;

        diffEditor.current.layout();
    }, [diffEditor.current, lineCount, original, modified]);

    return (
        <div ref={ref} />
    );
};

DiffEditor.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    original: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    modified: PropTypes.object.isRequired,
    originalLine: PropTypes.number.isRequired,
    lineCount: PropTypes.number.isRequired,
};

export default DiffEditor;
