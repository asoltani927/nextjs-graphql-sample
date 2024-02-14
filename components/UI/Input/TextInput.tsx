import BaseInput from "./BaseInput";
import { InputComponentProps } from "./types";

export default function TextInput(
    { label, placeholder }: Omit<InputComponentProps, ("type")>
  ) {
    return <BaseInput type="text" placeholder={placeholder}></BaseInput>
  }