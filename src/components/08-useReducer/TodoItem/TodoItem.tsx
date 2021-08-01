import { Todo } from "../todoReducer";

interface MyProps {
  todo: Todo;
  i: number;
  toogleTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}
const defaultProps = {
  toogleTodo: () => {},
  deleteTodo: () => {},
};
const TodoItem = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { todo, toogleTodo, deleteTodo, i } = props;
  return (
    <p
      onClick={() => {
        toogleTodo(todo);
      }}
      key={todo.id}
      className={`item d-flex justify-content-between align-items-center ${
        todo.done && " complete"
      }`}
    >
      <b>
        {i + 1}. {todo.desc}
      </b>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        Delete
      </button>
    </p>
  );
};

export default TodoItem;
