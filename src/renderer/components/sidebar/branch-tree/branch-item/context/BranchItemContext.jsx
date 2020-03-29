import React from 'react';
import PropTypes from 'prop-types';
import ContextMenuList from '../../../../context-menu/list/ContextMenuList';
import ContextMenuListItem from '../../../../context-menu/list/ContextMenuListItem';

const BranchItemContext = () => (
    <ContextMenuList>
        <ContextMenuListItem>
            Test1
        </ContextMenuListItem>
        <ContextMenuListItem>
            Test2
        </ContextMenuListItem>
        <ContextMenuListItem>
            Test3
        </ContextMenuListItem>
    </ContextMenuList>
);

BranchItemContext.propTypes = {

};

export default BranchItemContext;
