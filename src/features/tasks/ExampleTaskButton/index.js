import { StyledButton } from './styled';
import { fetchExampleTasks, selectTasksLenght } from '../tasksSlice';
import { useDispatch, useSelector } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const lenght = useSelector(selectTasksLenght);
    return (
        <>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={lenght > 0 ? true : false}
            >
                Pobierz Przykładowe Zadania
            </StyledButton>
        </>
    )
};

export default ExampleTasksButton;