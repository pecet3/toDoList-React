import { StyledButton } from './styled';
import { fetchExampleTasks } from '../tasksSlice';
import { useDispatch } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    return (
        <>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
            >
                Pobierz Przykładowe Zadania
            </StyledButton>
        </>
    )
};

export default ExampleTasksButton;