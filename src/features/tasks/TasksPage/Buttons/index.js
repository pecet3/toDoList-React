import { useSelector, useDispatch } from "react-redux";
import {
    selectTasksState,
    toggleHideDone,
    setAllTasksDone,
    removeAllTasks,
} from "../../tasksSlice";
import { Wrapper } from "./styled.js";
import { Button } from "../Button";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <Wrapper>
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
                    Ukończ wszystkie
                </Button>

                <Button
                    onClick={() => dispatch(removeAllTasks())}>
                    Usuń wszystkie
                </Button>

            </Wrapper>
        )
    )
};

export default Buttons;