import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);
  const [time, setTime] = useState(0);

  useEffect(() => {
    document.title = `(${count} Count | ${otherCount} Other Count | ${time} Time)`;
  }, [count, otherCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((current) => current + 1);
    }, 1000);

    return () => {
      console.log("Clean up of time");
      clearInterval(timer);
    };
  });

  useEffect(() => {
    console.log("Effect Run", count);
    return () => console.log("Clean up of count", count);
  }, [count]);

  return (
    <div>
      <h2>{time} in seconds.</h2>
      <h1>{count} New Message!</h1>
      <button onClick={() => setCount((current) => current + 1)}>
        Increase
      </button>
      <h1>{otherCount} Other New Message!</h1>
      <button onClick={() => setOtherCount((current) => current + 5)}>
        Increase By 5
      </button>
    </div>
  );
}
