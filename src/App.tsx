import { Calculadora } from "./Calculadora";

interface Keypad {
  value: string;
  size?: "2u-v" | "2u-h";
}

export default function App() {
  const keypad: Keypad[] = [
    { value: "Num" },
    { value: "/" },
    { value: "*" },
    { value: "-" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "+", size: "2u-v" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "Enter", size: "2u-v" },
    { value: "0", size: "2u-h" },
    { value: "." },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <Calculadora.Root>
        <Calculadora.Input />
        <Calculadora.Keypad>
          {keypad.map((button, index: number) => {
            return (
              <Calculadora.Button
                key={index}
                value={button.value}
                size={button.size ?? button.size}
              />
            );
          })}
        </Calculadora.Keypad>
      </Calculadora.Root>
    </div>
  );
}
