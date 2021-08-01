import { useMemo, useState } from "react";
import { procesoPesado } from "../../../helpers/procesoPesado";
import { useCounter } from "../../../hooks/useCounter";

interface MyProps {}
const defaultProps: MyProps = {};
const MemoHook = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const { counter, increment } = useCounter(200);

  const [show, setShow] = useState(true);
  // se volvera a ejecutar solo cuando mute el counter
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  // manera incorrecta
  // const memoProcesoPesado = procesoPesado(counter);
  return (
    <div data-testid="Memorize" className="row justify-content-center">
      <div className="col-md-10">
        <h1>
          Memorize component: <small>{counter}</small>
        </h1>
        <p>{memoProcesoPesado}</p>
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

export default MemoHook;
