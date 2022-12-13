import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState, useEffect } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(
    tasksFromLocalStorage 
    ? JSON.parse(localStorage.getItem("tasks"))
    : []
  );


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

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, {
      content: newTaskContent,
      done: false,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
  }]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


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
