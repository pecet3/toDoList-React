import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick= {toggleHideDone}
                className="buttons__button"
                disabled={tasks.every(({ done }) => !done)}>
                {hideDone ? "Pokaż " : "Ukryj "}
                Ukończone
            </button>

            <button className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ Wszystkie
            </button>
        </div >
    )
);

export default Buttons;