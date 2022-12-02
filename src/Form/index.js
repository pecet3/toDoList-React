import { useState } from "react";
import "./style.css"

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  };

    return (
      <form className="form" onSubmit={onFormSubmit}>
        <input
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          className="form__input"
          placeholder="Co jest do zrobienia?"
          autoFocus
        />
        <button className="js-button form__button">
          Dodaj zadanie
        </button>
      </form>
    )
  };

  export default Form;