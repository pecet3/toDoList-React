import "./style.css";



const Tasks = ({tasks, hideDoneTasks}) => {
    const onDelete = () => console.log("usunięto");
    return <ul className="list tasks">
        {tasks.map((task) =>
            <li
                className={`list__element${task.done && hideDoneTasks ? " list__element--hidden" : ""}`}
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
                    onClick = {onDelete}>
                    🗑
                </button>
            </li>
        )}
    </ul>
};

export default Tasks