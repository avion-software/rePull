import { useEffect, useState } from 'react';

const useNativeEvent = (eventName, eventCallback) => {
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) {
            return undefined;
        }

        ref.addEventListener(eventName, eventCallback);

        return () => {
            ref.removeEventListener(eventName, eventCallback);
        };
    }, [ref, eventName, eventCallback]);

    return setRef;
};

export default useNativeEvent;
