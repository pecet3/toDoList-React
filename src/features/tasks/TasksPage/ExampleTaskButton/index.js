import { StyledButton } from './styled';
import {
    fetchExampleTasks,
    selectFetchError,
    selectFetchLoading,
    selectTasksStateLenght
} from '../../tasksSlice';
import { useDispatch, useSelector } from "react-redux";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const lenght = useSelector(selectTasksStateLenght);
    const loading = useSelector(selectFetchLoading);
    const error = useSelector(selectFetchError);
    return (
        <>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled=
                {
                    lenght > 0 ? true : false
                        || loading
                        || error
                }
            >
                {loading ? loading : error ? error : "Pobierz Przykładowe Zadania"}
            </StyledButton>
        </>
    )
};

export default ExampleTasksButton;