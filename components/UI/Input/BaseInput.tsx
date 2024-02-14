import { Field } from "formik";
import { InputComponentProps } from "./types";

export default function BaseInput({
    type,
    placeholder
}: InputComponentProps) {
    return (<Field
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        />)
}