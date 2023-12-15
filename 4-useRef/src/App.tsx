import { useEffect, useRef, useState } from "react";

export default function App() {
  const [name, setName] = useState<string>("");
  const countRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Creating mutable variable which don't cause re-render
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  // Accessing DOM element
  function handleClick() {
    if (inputRef.current === null) return;
    inputRef.current.style.backgroundColor = "lightblue";
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
      <h3>Renders: {countRef.current}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
