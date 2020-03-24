import { makeStyles } from '@material-ui/core';

const useExpansionAnimationStyles = makeStyles(() => ({
    root: {
        overflow: 'hidden',
        maxHeight: 0,
        opacity: 0,
        transition: 'max-height .3s, opacity .5s',
    },
    appear: {
        maxHeight: 0,
    },
    appearActive: {
        maxHeight: 2000,
        opacity: 1,
    },
    appearDone: {
        maxHeight: 'initial',
        opacity: 1,
    },
    enter: {
        maxHeight: 0,
        opacity: 0,
    },
    enterActive: {
        maxHeight: 2000,
        opacity: 1,
    },
    enterDone: {
        maxHeight: 'initial',
        opacity: 1,
    },
    exit: {
        maxHeight: 2000,
        overflow: 'hidden',
        transition: 'max-height .3s, opacity 1.5s',
        opacity: 1,
    },
    exitActive: {
        maxHeight: 0,
        opacity: 0,
    },
    exitDone: {
        opacity: 0,
    },
}));

export default useExpansionAnimationStyles;
