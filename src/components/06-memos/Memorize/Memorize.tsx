import { useState } from "react";
import { useCounter } from "../../../hooks/useCounter";
import Small from "../Small/Small";

interface MyProps {}
const defaultProps: MyProps = {};
const Memorize = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const { counter, increment } = useCounter(1);
  
  const [show, setShow] = useState(true);
  
  return (
    <div data-testid="Memorize" className="row justify-content-center">
      <div className="col-md-10">
        <h1>
          Memorize component: <Small value={counter} />
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            increment(1);
          }}
        >
          +1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};

export default Memorize;
