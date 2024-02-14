import { useState } from "react";

const useFormHook = () => {

    const [value, setValue] = useState('');
    const handleClick = (value : string) => {
        setValue(value)
        //do something.
    };
    return {
        value,
        handleClick,
    }
}

export default useFormHook; 