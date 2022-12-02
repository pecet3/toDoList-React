import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState } from "react";







const tasks = [
  { id: 1, content: "przeniesc toDoList do React.js", done: false, },
  { id: 2, content: "uczyć się reacta", done: true, },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section title="Dodaj nowe Zadanie" body={<Form />} />
      <Section
        title="Do zrobienia:"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extra=
        {<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
           />}
        extraClass="section__header--withButtons" />
    </Container>
  );
}

export default App;
