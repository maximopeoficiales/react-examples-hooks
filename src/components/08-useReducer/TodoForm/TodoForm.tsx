import { useForm } from "../../../hooks/useForm";
import { Todo } from "../todoReducer";

interface MyProps {
  addTodo(todo: Todo): void;
}
const defaultProps: MyProps = {
  addTodo: () => {},
};
const TodoForm = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {
    formValues: { description },
    handlerChange,
  } = useForm({ description: "" });

  const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      desc: description,
      done: false,
    };
    props.addTodo(newTodo);
  };

  return (
    <form action="" onSubmit={handlerSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Insert todo"
          value={description}
          onChange={handlerChange}
        />
      </div>
      <button className="btn btn-warning d-block btn-lg my-2 w-100">Add</button>
    </form>
  );
};

export default TodoForm;
