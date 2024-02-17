import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface InputPropsBase {
  error?: boolean;
  disabled?: boolean;
  selected?: boolean;
  placeholder?: string;
  focused?: boolean;
  accessory?: "disclosure";
  label?: string | ReactNode;
  name: string
}

export interface InputComponentProps
  extends InputPropsBase,
    Omit<DetailedHTMLProps<
      InputHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >, 'name'> {}
