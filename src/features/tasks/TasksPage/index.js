import Form from "./Form"
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleTasksButton from "./ExampleTaskButton";
import Search from "../Search";
import React from "react";

function TasksPage() {
  return (
    <Container>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Wyszukiwarka"
        body={<Search/>}
      />
      <Section
        title="Dodaj nowe Zadanie"
        body={<Form />}
        extra={<ExampleTasksButton />}
        buttons="true"
      />
      <Section
        title="Do zrobienia"
        body={<TasksList />}
        extra={<Buttons />}
        buttons="true"
      />
    </Container>
  );
}

export default TasksPage;
