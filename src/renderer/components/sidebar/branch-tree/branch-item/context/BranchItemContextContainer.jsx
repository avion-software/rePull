import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BranchItemContext from './BranchItemContext';
import { checkoutBranch as checkoutBranchAction } from '../../../../../store/reducers/repository-branches/actions';
import { REPOSITORY_BRANCH_SHAPE } from '../../../../../constants/shapes';
import sendNotification from '../../../../../api/notifications/send';

const mapDispatchToProps = ({
    checkoutBranch: checkoutBranchAction,
});

const BranchItemContextContainer = ({ value, checkoutBranch, onHideContextMenu }) => {
    const handleCheckout = useCallback(async () => {
        if (value?.repository) {
            onHideContextMenu();
            const response = await checkoutBranch(value.repository, value);
            if (response?.status === 409) {
                sendNotification(
                    `${value.repository.name} - Checkout failed`,
                    `Failed to checkout branch ${value.name}`,
                );
            }
        }
    }, [value, onHideContextMenu, checkoutBranch]);

    return (
        <BranchItemContext
            onCheckout={handleCheckout}
        />
    );
};

BranchItemContextContainer.propTypes = {
    checkoutBranch: PropTypes.func.isRequired,
    onHideContextMenu: PropTypes.func.isRequired,
    value: PropTypes.shape(REPOSITORY_BRANCH_SHAPE).isRequired,
};

export default connect(null, mapDispatchToProps)(BranchItemContextContainer);
