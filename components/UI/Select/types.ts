import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IOptions {
  label: string,
  value: string
}

interface SelectPropsBase {
  error?: boolean;
  disabled?: boolean;
  selected?: boolean;
  placeholder?: string;
  focused?: boolean;
  accessory?: "disclosure";
  label?: string | ReactNode;
  options?: Array<string | number> | IOptions[]
}

export interface SelectPropsWeb
  extends SelectPropsBase,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { }
