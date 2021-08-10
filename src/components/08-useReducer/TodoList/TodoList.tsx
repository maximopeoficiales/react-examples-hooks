import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../todoReducer";

interface MyProps {
  todos: Todo[];
  toogleTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}
const defaultProps: MyProps = {
  todos: [],
  toogleTodo: () => {},
  deleteTodo: () => {},
};
const TodoList = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { todos, toogleTodo, deleteTodo } = props;
  return (
    <>
      <h4>Todos ({todos.length})</h4>
      <ul className="my-4">
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              i={i}
              deleteTodo={deleteTodo}
              toggleTodo={toogleTodo}
              todo={todo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
