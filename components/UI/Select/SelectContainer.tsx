import { ReactNode } from "react";

export default function SelectContainer({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
