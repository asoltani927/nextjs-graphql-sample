import { Field, getIn } from "formik";
import { InputComponentProps } from "./types";
import { useId } from "react";
import { ErrorMessage } from "formik";

export default function BaseInput({
    type,
    placeholder,
    label,
    name,
}: InputComponentProps) {
    function getStyles(errors: any, fieldName: any) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red'
            }
        }
    }

    const CustomInput = ({ field, form: { errors } }: any) => {
        return <input
                className="shadow appearance-none border rounded w-full p-2 px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...field}
                id={uniqId}
                type={type}
                placeholder={placeholder}
                style={getStyles(errors, field.name)} />
    }
    // generating a unique id for label and input. so when user click in label, the focus will be enabled on input
    const uniqId = useId();
    return (
        <>
            <div>
                {label && (
                    <label
                        htmlFor={uniqId}
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        {label}
                    </label>
                )}
                <Field
                    name={name}
                    component={CustomInput}
                />

            </div>
            <ErrorMessage name={name}>
                {
                    msg => <span className="text-xs text-[#dc4c64] animate-[fade-in_0.3s_both] mt-4">{msg}</span>
                }
            </ErrorMessage>
        </>
    );
}