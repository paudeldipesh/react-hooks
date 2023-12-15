import { useCallback, useState } from "react";
import PrintTable from "./components/PrintTable";

export default function App() {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const calculateTable = useCallback(
    (value: number) => {
      let digit = number + value;
      return [digit * 1, digit * 2, digit * 3, digit * 4, digit * 5];
    },
    [number]
  );

  const cssStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={cssStyle}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDarkTheme((current) => !current)}>
        Toggle
      </button>
    </div>
  );
}
