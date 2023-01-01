import { Container, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllTasksDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <Container>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {hideDone ? "Pokaż " : "Ukryj "}
                    Ukończone
                </Button>

                <Button
                    onClick={() => dispatch(setAllTasksDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ Wszystkie
                </Button>
            </Container>
        )
    )
};

export default Buttons;