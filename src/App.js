import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([{ id: 1, content: "przeniesc toDoList do React.js", done: false, },
  { id: 2, content: "uczyć się reacta", done: true, },])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };

      return task;
    }));
  };
  
  const setAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
       done: true
      })));
    };

  return (
    <Container>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe Zadanie"
        body={<Form />}
      />
      <Section
        title="Do zrobienia:"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extra={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllTasksDone={setAllTasksDone}
          />}
        extraClass="section__header--withButtons" />
    </Container>
  );
}

export default App;
