import { useState } from "react";

export default function App() {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          setDetails((current) => ({ ...current, name: e.target.value }))
        }
      />
      <h1>
        {details.name} has clicked {details.counter} times!
      </h1>
      <button
        onClick={() =>
          setDetails((current) => ({
            ...current,
            counter: current.counter + 1,
          }))
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          setDetails((current) => ({
            ...current,
            counter: current.counter - 1,
          }))
        }
      >
        Decrease
      </button>
      <button
        onClick={() =>
          setDetails((current) => ({
            ...current,
            counter: 0,
          }))
        }
      >
        Reset
      </button>
    </div>
  );
}
