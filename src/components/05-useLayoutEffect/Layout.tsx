import { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

interface MyProps {}
const defaultProps: MyProps = {};
const Layout = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const nameRef = useRef<HTMLHeadingElement>(null);
  const { counter, increment, decrement } = useCounter(1);
  const { state } = useFetch(
    `https://www.breakingbadapi.com/api/characters/${counter}`
  );
  // console.log(state);
  const { data } = state;
  // cuando sea diferente de null obten este dato
  const { name, birthday, img, status } = !!data && data[0];

  useLayoutEffect(() => {
    console.log(nameRef.current?.getBoundingClientRect());
  }, [data]);

  return (
    <div
      data-testid="MultipleCustomHooks"
      className="row justify-content-center"
    >
      <div className="col-md-4">
        <h1>LayoutEffect</h1>
        <>
          <div className="card">
            <img className="card-img-top " src={img} alt="" height="400px" />
            <div className="card-body">
              <h4 className="">{name}</h4>
              <p className="">{birthday}</p>
              <p className="card-text">{status}</p>
            </div>
          </div>
          <div className="d-flex">
            <p className="" ref={nameRef}>
              {name}
            </p>
          </div>
          <div className="d-flex justify-content-center my-2">
            <button
              className="btn btn-lg btn-primary mx-2"
              onClick={() => {
                decrement();
              }}
            >
              Previous
            </button>

            <button
              className="btn btn-lg btn-primary mx-2"
              onClick={() => {
                increment();
              }}
            >
              Next
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Layout;
