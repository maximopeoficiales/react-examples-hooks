import { Todo } from "../todoReducer";

interface MyProps {
  todo: Todo;
  i: number;
  toggleTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}
const defaultProps = {
  toggleTodo: () => {},
  deleteTodo: () => {},
};
const TodoItem = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { todo,  toggleTodo, deleteTodo, i } = props;
  return (
    <p
      onClick={() => {
        toggleTodo(todo);
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
