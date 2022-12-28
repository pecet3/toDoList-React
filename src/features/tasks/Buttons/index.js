import { Container, Button } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone }) => (
    tasks.length > 0 && (
        <Container>
            <Button
                onClick={toggleHideDone}
                disabled={tasks.every(({ done }) => !done)}
            >
                {hideDone ? "Pokaż " : "Ukryj "}
                Ukończone
            </Button>

            <Button
                onClick={setAllTasksDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ Wszystkie
            </Button>
        </Container>
    )
);

export default Buttons;