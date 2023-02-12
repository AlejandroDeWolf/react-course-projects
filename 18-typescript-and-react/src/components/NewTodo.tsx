import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // null is the initial value

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // with '!' we tell that we are sure that the value is not null, otherwise we would have to check it and write a '?

    if (enteredText.trim().length === 0) {
      // trim means that we remove all the white spaces
      // throw an error
      return;
    }
  };

  return (
    <form>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
