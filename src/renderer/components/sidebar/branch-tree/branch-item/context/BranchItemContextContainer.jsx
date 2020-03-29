import React from 'react';
import PropTypes from 'prop-types';
import BranchItemContext from './BranchItemContext';

const BranchItemContextContainer = ({ value }) => {
    console.log('value', value);

    return (
        <BranchItemContext />
    );
};

BranchItemContextContainer.propTypes = {

};

export default BranchItemContextContainer;
