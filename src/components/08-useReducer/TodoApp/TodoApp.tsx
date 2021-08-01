import { useEffect, useReducer } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { Action, Todo, todoReducer } from "../todoReducer";

import "./TodoApp.css";

interface MyProps {}
const defaultProps: MyProps = {};
const TodoApp = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const init = (): Todo[] => {
    const todos = localStorage.getItem("todos");
    return todos == null ? [] : JSON.parse(todos);
  };
  // tambien se puede usar de esta manera
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    dispatch({ type: Action.ADD, payload: todo });
  };
  const deleteTodo = (todo: Todo) => {
    dispatch({ type: Action.DELETE, payload: todo });
  };
  const toogleTodo = (todo: Todo) => {
    dispatch({ type: Action.TOGGLE, payload: todo });
  };

  return (
    <div data-testid="TodoApp" className="row justify-content-center">
      <div className="col-md-10">
        <h1 className="text-center font-weight-bold my-4">TodoApp component</h1>

        <div className="row">
          <div className="col-md-7">
            <TodoList
              deleteTodo={deleteTodo}
              toogleTodo={toogleTodo}
              todos={todos}
            />
          </div>
          <div className="col-md-5">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
