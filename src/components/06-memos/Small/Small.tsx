import React from "react";

interface MyProps {
  value: number;
}

const defaultProps: MyProps = {
  value: 1,
};
// el problema aqui es que cuando un componente cambia se renderiza sus hijos, cosa que no deberia pasar amenos que sus props muten
const Small = React.memo((props: MyProps) => {
  props = { ...defaultProps, ...props };

  console.log("Se volvio a renderizar el componente Small");
  return <small>{props.value}</small>;
});

export default Small;
