import { ReactNode } from "react";

interface CalculadoraRootProps {
  children: ReactNode;
}

export default function CalculadoraRoot({ children }: CalculadoraRootProps) {
  return (
    <div className="w-1/3 border border-black rounded-lg p-4 flex flex-col gap-4 bg-gray-200">
      {children}
    </div>
  );
}
