import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonPropsBase {
    disabled?: boolean;
    loading?: boolean;
    color?:
    | "primary"
    | "secondary"
    | "dark"
    | "light"
    | "green"
    | "red"
    | "yellow"
    | "purple";
    outlined?: boolean;
    pills?: boolean;
    preIcon?: ReactNode;
    appendIcon?: ReactNode;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    label?: string;
    submit?: boolean;
}

export interface ButtonComponentProps
    extends ButtonPropsBase,
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > { }

