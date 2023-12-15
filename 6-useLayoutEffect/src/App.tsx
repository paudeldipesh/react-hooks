import { useLayoutEffect, useRef, useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  // useEffect(() => {
  //   console.log("useEffect");
  //   if (textRef.current === null) return;
  //   const dimension = textRef.current.getBoundingClientRect();
  //   textRef.current.style.paddingTop = `${dimension.height}px`;
  // }, [toggle]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (textRef.current === null) return;
    const dimension = textRef.current.getBoundingClientRect();
    textRef.current.style.paddingTop = `${dimension.height}px`;
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle((current) => !current)}>Toggle</button>
      {toggle && <h2 ref={textRef}>Dipesh Paudel</h2>}
    </>
  );
}
