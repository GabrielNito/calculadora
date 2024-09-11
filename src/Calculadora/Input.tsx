interface CalculadoraInputProps {}

export default function CalculadoraInput({}: CalculadoraInputProps) {
  return (
    <input
      type="text"
      className="border border-black p-8 rounded-md text-end outline-none"
      autoFocus
    />
  );
}
