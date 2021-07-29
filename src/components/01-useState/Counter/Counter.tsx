import { useState } from "react";

interface MyProps {}
const defaultProps: MyProps = {};
const Counter = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 30,
    counter3: 22,
  });
  const { counter1, counter2, counter3 } = counter;
  return (
    <div className="row justify-content-center ">
      <div className="col-md-8">
        <h1>Counter component</h1>
        <p>Counter1: {counter1}</p>
        <p>Counter2: {counter2}</p>
        <p>Counter3: {counter3}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCounter({ ...counter, counter1: counter1 + 1 });
          }}
        >
          Aumentar +1
        </button>
      </div>
    </div>
  );
};

export default Counter;
