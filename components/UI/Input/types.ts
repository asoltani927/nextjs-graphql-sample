import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface InputPropsBase {
  error?: boolean;
  disabled?: boolean;
  selected?: boolean;
  placeholder?: string;
  focused?: boolean;
  accessory?: "disclosure";
  label?: string | ReactNode;
}

export interface InputComponentProps
  extends InputPropsBase,
    DetailedHTMLProps<
      InputHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {}
