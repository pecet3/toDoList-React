import { StyledButton } from './styled';
import { fetchExampleTasks, selectTasksStateLenght } from '../../tasksSlice';
import { useDispatch, useSelector } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const lenght = useSelector(selectTasksStateLenght);
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