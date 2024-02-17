import { ButtonComponentProps } from "./types";


export default function Button({children, className, submit}: ButtonComponentProps) {
    return (<button type={submit ? 'submit' : 'button'} className={className}> {children} </button>)
}