import { useState } from "react";
import MultipleCustomHooks from "../../03-examples/MultipleCustomHooks/MultipleCustomHooks";

interface MyProps {}
const defaultProps: MyProps = {};
const RealExampleRef = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const [hidden, setHidden] = useState(false);
  return (
    <div data-testid="RealExampleRef" className="row justify-content-center">
      <div className="col-md-10">
        <h1>RealExampleRef component</h1>
        <button
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          Hidden
        </button>
        {hidden && <MultipleCustomHooks />}
      </div>
    </div>
  );
};

export default RealExampleRef;
