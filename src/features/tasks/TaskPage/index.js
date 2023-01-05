import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector( state => getTaskById(state, id));
  console.log(id);
  return (
    <Container>
      <Header
        title="Szczegóły zadania"
      />
      <Section
        title={task.content}
        body={<>Ukończone: <strong>{task.done ? "tak": "nie"}</strong></>}
      />
    </Container>
  );
}

export default TaskPage;