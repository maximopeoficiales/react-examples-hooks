import { useContext } from "react";
import { UserContext } from "../UserContext";

interface MyProps {}
const defaultProps: MyProps = {};
const HomePage = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  // obtengo el contexto de UserContext
  const { user, setUser } = useContext<any>(UserContext);
  console.log(user);

  return (
    <div data-testid="HomePage" className="row justify-content-center">
      <div className="col-md-10">
        <h1>HomePage component</h1>
        <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
    </div>
  );
};

export default HomePage;
