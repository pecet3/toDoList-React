import "./style.css";

const Tasks = (props) => (
    <ul className="list tasks">
        {props.tasks.map((task) =>
            <li
                className={`list__element${task.done && props.hideDoneTasks ? " list__element--hidden" : ""}`}
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
                    className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        )}
    </ul>
);

export default Tasks;