import { useEffect, useState } from "react";

interface MyProps {}
const defaultProps: MyProps = {};
const Message = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const [cords, setCords] = useState({ x: 0, y: 0 });
  // ciclo de vida}
  const { x, y } = cords;
  const handlerMouseUp = (e: any) => {
    setCords({ x: e.x, y: e.y });
  };
  useEffect(() => {
    // se ejecuta al cargar el componente
    console.log("Se ha montando el componente");
    // al cargar el componente agrego un evento
    window.addEventListener("mousemove", handlerMouseUp);

    return () => {
      // se ejecuta al desmontarse
      // remuevo el listener
      window.removeEventListener("mousemove", handlerMouseUp);
      console.log("Se ha desmontado el componente");
    };
  }, []);

  return (
    <div data-testid="Message" className="row justify-content-center">
      <div className="col-md-10"></div>
      <h1>Hola bro</h1>
      <p>
        X: {x} Y:{y}
      </p>
    </div>
  );
};

export default Message;
