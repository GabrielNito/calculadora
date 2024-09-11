interface CalculadoraButtonProps {
  value: string;
  size?: "default" | "2u-v" | "2u-h";
}

export default function CalculadoraButton({
  value,
  size,
}: CalculadoraButtonProps) {
  if (size === "2u-v") {
    return (
      <button className="bg-white p-8 border border-black rounded-lg row-span-2">
        {value}
      </button>
    );
  }
  if (size === "2u-h") {
    return (
      <button className="bg-white p-8 border border-black rounded-lg col-span-2">
        {value}
      </button>
    );
  }
  return (
    <button className="bg-white p-8 border border-black rounded-lg">
      {value}
    </button>
  );
}
