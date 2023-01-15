import { useState, useEffect } from 'react';

const useDebounce = (value, timeMount = 1000) => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => {
            setDebounce(value);
        }, timeMount);
        return () => {
            clearTimeout(id);
        };
    }, [value]);
    return debounce;
};

export default useDebounce;
