import { useState } from "react";
import { AppRouter } from "../AppRouter";
import { UserContext } from "../UserContext";

interface MyProps {}
const defaultProps: MyProps = {};
const MainApp = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  // const user = {
  //   id: 1234,
  //   name: "maximo junior",
  //   email: "maximopeoficiales@gmail.com",
  // };
  const [user, setUser] = useState({});
  // para usar un context este debe englobar high order component debe ser el padre de sus hijos a usar contexto
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
