import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
            <div className="buttons">
                <button
                    className="buttons__button" disabled = {!tasks.every(({ done }) => done)}>
                    {hideDoneTasks ? "Pokaż " : "Ukryj "}
                    Ukończone</button>

                <button className="buttons__button"
                    disabled = {tasks.every(({ done }) => done)}>
                    Ukończ Wszystkie</button>
            </div>
        )
);

export default Buttons;