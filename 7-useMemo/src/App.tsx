import { useState, useMemo } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const memoCalculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={cssStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <h2>Calculation: {memoCalculation}</h2>
      <button onClick={() => setDark((current) => !current)}>Toggle</button>
    </div>
  );
}

function expensiveFunction(digit: number) {
  console.log("expensiveFunction Called!");
  for (let i = 0; i < 1000000000; i++) {}
  return digit;
}
