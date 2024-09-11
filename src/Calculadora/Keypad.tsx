import { ReactNode } from "react";

interface CalculadoraKeypadProps {
  children: ReactNode;
}

export default function CalculadoraKeypad({
  children,
}: CalculadoraKeypadProps) {
  return <div className="grid grid-cols-4 grid-rows-5 gap-2">{children}</div>;
}
