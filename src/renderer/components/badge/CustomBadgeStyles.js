import { makeStyles } from '@material-ui/core';

const useCustomBadgeStyles = makeStyles((theme) => ({
    badge: props => ({
        backgroundColor: props.badgeColor,
        color: 'white',
    }),
}));

export default useCustomBadgeStyles;
