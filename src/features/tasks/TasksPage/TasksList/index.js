import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
    toggleTaskDone,
    removeTask,
    selectHideDone,
    selectTasksByQuery
} from "../../tasksSlice.js";
import { List, Element, Button, Content } from "./styled.js"

const TasksList = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("szukaj");
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
                        <Link to={`/zadania/${task.id}`} >{task.content}</Link>
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

export default TasksList