import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // we use ref when we want to access the value of an element once
  const nameInputRef = useRef();
  // we use state when we want to re-render the component when the value changes, thus every keystroke or when we want to clear the input
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangedHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
