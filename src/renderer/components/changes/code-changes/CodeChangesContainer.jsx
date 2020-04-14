import React from 'react';
import PropTypes from 'prop-types';

const CodeChangesContainer = ({ selected }) => {
    console.log(selected);

    return (
        <div>
            {selected?.hunks.map((hunk) => (
                <div>
                    {hunk.lines.map((line) => (
                        <div>
                            {line.content}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

CodeChangesContainer.propTypes = {

};

export default CodeChangesContainer;
