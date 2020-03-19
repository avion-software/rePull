import { makeStyles } from '@material-ui/core';

const useCustomBadgeStyles = makeStyles(() => ({
    badge: (props) => ({
        backgroundColor: props.badgeColor,
        color: 'white',
    }),
}));

export default useCustomBadgeStyles;
