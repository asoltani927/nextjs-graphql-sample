import BaseInput from "./BaseInput";
import { InputComponentProps } from "./types";

export default function TextInput(
  { label, placeholder, name }: Omit<InputComponentProps, ("type")>
) {
  return <>
    <BaseInput type="text" label={label} name={name} placeholder={placeholder}></BaseInput>
  </>
}