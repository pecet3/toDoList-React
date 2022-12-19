import { useState, useRef} from "react";
import { StyledForm, Input, Button } from "./styled.js";
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"



const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const focusInput = useRef(null);

  const focusOnInput = () => {
    focusInput.current.focus();
  };

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
          placeholder="Co jest do zrobienia?"
          ref={focusInput}
          autoFocus={true}
        />
        <Button onClick={focusOnInput}>
          Dodaj zadanie
        </Button>
      </StyledForm>
      </ThemeProvider>
    )
  };

  export default Form;