import { FormHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface FormPropsBase {
    validationSchema?: object,
    initialValues?: object,
    // children: ReactNode,
    // onError?: function
}

export interface FormComponentProps
  extends FormPropsBase,
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
