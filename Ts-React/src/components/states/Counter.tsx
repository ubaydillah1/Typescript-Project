import { useReducer } from "react";

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

function reducer(state: { count: number }, action: UpdateAction | ResetAction) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        {" "}
        +{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        {" "}
        -{" "}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </div>
  );
};

export default Counter;
