import { StyledButton } from './styled';
import { selectIsAllDone, removeAllTasks, selectTasksLenght } from '../../features/tasks/tasksSlice';
import { useSelector, useDispatch } from "react-redux";

const Button = () => {
    const taskLenght = useSelector(selectTasksLenght)
    const isAllDone = useSelector(selectIsAllDone);
    const dispatch = useDispatch();
    return (
        <>
            <StyledButton
                changeBackground={!isAllDone}
                onClick={()=> dispatch(removeAllTasks())}
                lenght={taskLenght}
            >
                kliknij
            </StyledButton>
        </>
    )
};

export default Button;