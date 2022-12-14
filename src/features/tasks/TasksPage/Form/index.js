import { useState, useRef} from "react";
import { StyledForm, Button } from "./styled.js";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice.js"; 
import { nanoid } from "@reduxjs/toolkit";
import { Input } from "../../Input/index.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const focusInput = useRef(null);

  const dispatch = useDispatch();

  const focusOnInput = () => {
    focusInput.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();

    if (! trimmedNewTaskContent){
      return;
    }
    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));
    setNewTaskContent("");
    focusOnInput();
  };

    return (
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          placeholder="Co jest do zrobienia?"
          ref={focusInput}
          autoFocus={true}
        />
        <Button>
          Dodaj zadanie
        </Button>
      </StyledForm>
    )
  };

  export default Form;