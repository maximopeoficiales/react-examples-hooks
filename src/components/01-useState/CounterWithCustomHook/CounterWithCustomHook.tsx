import { useCounter } from "../../../hooks/useCounter";

interface MyProps {}
const defaultProps: MyProps = {};
const CounterWithCustomHook = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const { counter, decrement, increment, reset } = useCounter(20);
  return (
    <div
      data-testid="CounterWithCustomHook"
      className="row justify-content-center"
    >
      <div className="col-md-8">
        <h1>CounterWithCustomHook component</h1>
        <p>Numero Actual: {counter}</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              increment(2);
            }}
          >
            Aumentar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              reset();
            }}
          >
            Resetear
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              decrement(2);
            }}
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterWithCustomHook;
