import { useEffect, useState, ChangeEvent } from "react";
import Message from "../Message/Message";

interface MyProps {}
const defaultProps: MyProps = {};
const SimpleForm = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const [formState, setFormState] = useState({
    email: "",
    name: "",
  });
  const { email, name } = formState;

  const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  useEffect(() => {
    // console.log("se ejecuta solo una vez");
  }, []);

  useEffect(() => {
    // console.log("ocurrio un cambio en el formulario");
  }, [formState]);

  useEffect(() => {
    // console.log("ocurrio un cambio en el email");
  }, [email]);

  return (
    <div data-testid="SimpleForm" className="row justify-content-center">
      <div className="col-md-10">
        <h1>SimpleForm component</h1>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handlerChange}
              className="form-control"
              placeholder="Ingresa tu Nombre"
              aria-describedby="helpId"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={handlerChange}
              className="form-control"
              placeholder="Ingresa tu email"
              aria-describedby="helpId"
            />
          </div>
        </form>
        {/* uso de useEffect */}
        {name === "123" && <Message />}
      </div>
    </div>
  );
};

export default SimpleForm;
