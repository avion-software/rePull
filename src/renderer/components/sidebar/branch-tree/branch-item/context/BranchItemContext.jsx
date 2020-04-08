import React from 'react';
import PropTypes from 'prop-types';
import ContextMenuList from '../../../../context-menu/list/ContextMenuList';
import ContextMenuListItem from '../../../../context-menu/list/ContextMenuListItem';

const BranchItemContext = ({ onCheckout }) => (
    <ContextMenuList>
        <ContextMenuListItem
            onClick={onCheckout}
        >
            Checkout
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
    onCheckout: PropTypes.func.isRequired,
};

export default BranchItemContext;
