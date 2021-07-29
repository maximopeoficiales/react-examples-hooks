import { SyntheticEvent } from "react";
import { useForm } from "../../../hooks/useForm";

interface MyProps {}
const defaultProps: MyProps = {};
interface FormValues {
  email: string;
  name: string;
  password: string;
}

const FormWithCustomHook = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const { formValues, handlerChange } = useForm<FormValues>({
    email: "",
    name: "",
    password: "",
  });

  const { email, name, password } = formValues;

  const handlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div data-testid="SimpleForm" className="row justify-content-center">
      <div className="col-md-10">
        <h1>SimpleForm component</h1>
        <form action="" onSubmit={handlerSubmit}>
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
            <input
              type="text"
              name="password"
              value={password}
              onChange={handlerChange}
              className="form-control"
              placeholder="Ingresa tu contraseña"
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWithCustomHook;
