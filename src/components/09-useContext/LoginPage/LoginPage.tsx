import { useContext } from "react";
import { UserContext } from "../UserContext";

interface MyProps {}
const defaultProps: MyProps = {};
const LoginPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const { user, setUser } = useContext(UserContext);

  const handlerLogin = () => {
    setUser({
      id: 2323,
      name: "maximo junior",
      age: 22,
    });
  };

  return (
    <div data-testid="LoginPage" className="row justify-content-center">
      <div className="col-md-10">
        <h1>LoginPage component</h1>
        <pre>{JSON.stringify(user, null, 3)}</pre>

        <button
          type="button"
          name=""
          id=""
          onClick={handlerLogin}
          className="btn btn-primary btn-lg btn-block"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
