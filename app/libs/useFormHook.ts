import { useState } from "react";
import * as Yup from 'yup';

const useFormHook = () => {

    const [value, setValue] = useState('');
    const handleClick = (value: string) => {
        setValue(value)
        //do something.
    };

    const formValidationSchema = () => {
        return Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('You need to enter a first name'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('You need to enter a first name'),
            favoriteMovie: Yup.string().optional(),
        });
    };

    return {
        value,
        handleClick,
        formValidationSchema
    }
}

export default useFormHook; 