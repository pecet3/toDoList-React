import Form from "./Form"
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Button from "../../common/Button";
import React from "react";

function Tasks() {

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
        body={<TasksList />}
        extra={<Buttons />}
        buttons="true"
      />
      <Section
        title="Lorem Ipsum"
        body={<Button />}
      />
    </Container>
  );
}

export default Tasks;
