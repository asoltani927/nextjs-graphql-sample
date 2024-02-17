import { useEffect, useId } from "react";
import { SelectPropsWeb } from "./types";
import { Field } from "formik";

export default function SelectInput({ label, name, options }: SelectPropsWeb) {
  // TODO: adding validation errors styles

  // generating a unique id for label and input. so when user click in label, the focus will be enabled on input
  const uniqId = useId();

  const OptionsComponent = () => {
    return options?.map((option, index) => {
      if (typeof option === "object" && 'value' in option && 'label' in option)
        return <option key={`${uniqId}-option-${index}`} value={option.value}>{option.label}</option>
      return <option key={`${uniqId}-option-${index}`} value={option}>{option}</option>
    })
  }

  useEffect(() => {
    return () => {
      OptionsComponent()
    }
  })

  return (
    <>
      {
        label && <label htmlFor={uniqId}
          className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      }
      <Field
        as="select"
        id={uniqId}
        name={name}
        className="block appearance-none shadow border rounded w-full p-2 px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
      >
        {
          options && <OptionsComponent />
        }
      </Field>
    </>
  );
}
