import { Container, Button } from "./styled.js";
import {theme} from "../theme.js";
import {ThemeProvider } from "styled-components";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone }) => (
    tasks.length > 0 && (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
);

export default Buttons;