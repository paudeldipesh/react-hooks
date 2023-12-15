import { useReducer } from "react";
import countReducer from "./reducers/countReducer";
import { InitialStateType } from "./models/types";
import ACTION from "./utils/action";

const initialState: InitialStateType = { count: 0 };

export default function App() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  function increaseCount() {
    dispatch({
      type: ACTION.INCREASE,
    });
  }

  function decreaseCount() {
    dispatch({
      type: ACTION.DECREASE,
    });
  }

  function resetCount() {
    dispatch({
      type: ACTION.RESET,
    });
  }

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}
