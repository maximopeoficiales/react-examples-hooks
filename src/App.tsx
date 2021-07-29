import Counter from "./components/01-useState/Counter/Counter";
import "./App.css";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook/CounterWithCustomHook";
import SimpleForm from "./components/02-useEffect/SimpleForm/SimpleForm";
import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook/FormWithCustomHook";
function App() {
  return (
    <div className="App">
      {/* hola bro */}
      {/* <Counter />
      <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      <FormWithCustomHook />
    </div>
  );
}

export default App;
