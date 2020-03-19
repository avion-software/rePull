import { useCallback, useRef, useState } from 'react';

export default function useStateWithRef(initialValue) {
    const [value, setValue] = useState(initialValue);
    const ref = useRef(value);

    const handleValueChange = useCallback((val) => {
        if (typeof val === 'function') {
            setValue((currentValue) => {
                const retVal = val(currentValue);

                ref.current = retVal;

                return retVal;
            });
            return;
        }

        setValue(val);
        ref.current = val;
    }, [ref, setValue]);

    return [value, handleValueChange, ref];
}
