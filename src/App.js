import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przeniesc toDoList do React.js", done: false, },
  { id: 2, content: "uczyć się reacta", done: false, },
];

const hideDoneTasks = true;

function App() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section title="Dodaj nowe Zadanie" body={<Form />} />
      <Section
        title="Do zrobienia:"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extra={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraClass="section__header--withButtons" />
    </Container>
  );
}

export default App;
