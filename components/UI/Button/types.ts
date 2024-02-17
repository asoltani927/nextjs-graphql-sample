import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonPropsBase {
    disabled?: boolean;
    loading?: boolean;
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

