import { useRef } from "react";

interface MyProps {}
const defaultProps: MyProps = {};
const FocusScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const inputRef = useRef<HTMLInputElement>(null);
  const handlerClick = () => {
    inputRef.current?.select();
    console.log(inputRef);
  };

  return (
    <div data-testid="FocusScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>FocusScreen component</h1>
        <input ref={inputRef} type="text" placeholder="Su nombre" />
        <button className="btn btn-danger" onClick={handlerClick}>
          Focus
        </button>
      </div>
    </div>
  );
};

export default FocusScreen;
