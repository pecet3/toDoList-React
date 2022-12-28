import Form from "./Form"
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import React, { useState } from "react";
import { useTasks } from "../../useTasks.js"



function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllTasksDone,
    addNewTask }
    = useTasks();


  return (
    <Container>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe Zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />}
      />
      <Section
        title="Do zrobienia:"
        body={
          <TasksList
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
        buttons={true} />
    </Container>
  );
}

export default Tasks;
