import React from "react";

interface MyProps {
  increment(num: number): void;
}
const defaultProps: MyProps = {
  increment: () => {},
};
const ShowIncrement = React.memo((props: MyProps) => {
  props = { ...defaultProps, ...props };
  console.log("Me volvi a generar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        props.increment(11);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
