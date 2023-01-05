import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice.js";
import { List, Element, Button, Content } from "./styled.js"

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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