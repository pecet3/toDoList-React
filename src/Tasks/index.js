import "./style.css";

const removeTask = (taskContent) => {
    console.log(`do usunięcia ${taskContent}`);
}


const Tasks = ({tasks, hideDone}) => {
    return <ul className="list tasks">
        {tasks.map((task) =>
            <li
                className={`list__element${task.done && hideDone ? " list__element--hidden" : ""}`}
                key={task.id}>
                <button
                    className="list__button list__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <p
                    className={`list__content ${task.done ? "list__content--done" : ""}`}>
                    {task.content}
                </p>
                <button
                    className="list__button list__button--remove"
                    onClick = {() => removeTask(task.content)}>
                    🗑
                </button>
            </li>
        )}
    </ul>
};

export default Tasks