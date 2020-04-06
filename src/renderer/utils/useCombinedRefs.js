import { useCallback } from 'react';

const useCombinedRefs = (...refs) => useCallback((currentRef) => {
    refs.forEach((ref) => {
        try {
            ref(currentRef);
        } catch (ex) {
            // ignore
        }
    });
}, [...refs]);

export default useCombinedRefs;
