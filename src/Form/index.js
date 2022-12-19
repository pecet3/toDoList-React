import { useState } from "react";
import { StyledForm, Input, Button } from "./styled.js";
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"


const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();

    if (! trimmedNewTaskContent){
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");

  };

    return (
      <ThemeProvider theme={theme}>
      <StyledForm className="form" onSubmit={onFormSubmit}>
        <Input
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          className="form__input"
          placeholder="Co jest do zrobienia?"
          autoFocus
        />
        <Button>
          Dodaj zadanie
        </Button>
      </StyledForm>
      </ThemeProvider>
    )
  };

  export default Form;