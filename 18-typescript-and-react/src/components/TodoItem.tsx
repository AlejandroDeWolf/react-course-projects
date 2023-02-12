import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.removeTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
