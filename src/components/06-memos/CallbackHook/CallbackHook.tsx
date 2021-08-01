import { useCallback, useState } from "react";
import ShowIncrement from "../ShowIncrement/ShowIncrement";

interface MyProps {}
const defaultProps: MyProps = {};
const CallbackHook = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const [counter, setCounter] = useState(10);

  // problema de este es que se vuelve a renderizar el component hijo cada vez que cambia el counter
  // const increment = (num: number) => {
  //   setCounter(counter + 1);
  // };
  // para usar esta tecnica el componente de usar React.memo
  const increment = useCallback(
    (num: number) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div data-testid="CallbackHook" className="row justify-content-center">
      <div className="col-md-10">
        <h1>UseCallback {counter}</h1>
        <ShowIncrement increment={increment} />
      </div>
    </div>
  );
};

export default CallbackHook;
