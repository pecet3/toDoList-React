import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../searchQueryParamName.js";
import {
    toggleTaskDone,
    removeTask,
    selectHideDone,
    selectTasksByQuery
} from "../../tasksSlice.js";
import { List, Element, Button, Content } from "./styled.js"
import { StyledLink } from "./styled.js";

const TasksList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);
    const hideDone = useSelector(selectHideDone);
    const tasks = useSelector((state) => selectTasksByQuery(state, query));

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) =>
                <Element
                    hidden={task.done && hideDone}
                    key={task.id}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done && "✔"}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        <StyledLink to={`/zadania/${task.id}`} >{task.content}</StyledLink>
                    </Content>
                    <Button
                        toggleRemove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Element>
            )}
        </List>
    )
};

export default TasksList;