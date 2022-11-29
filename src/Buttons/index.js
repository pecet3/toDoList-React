import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
    let isAnyDone = tasks.some(({ done }) => done);
    let isAllDone = tasks.every(({ done }) => done);
    tasks.length > 0 && (
            <div className="buttons">
                <button
                    className="buttons__button" disabled = {!isAnyDone}>
                    {hideDoneTasks ? "Pokaż " : "Ukryj "}
                    Ukończone</button>

                <button className="buttons__button"
                    disabled = {isAllDone}>
                    Ukończ Wszystkie</button>
            </div>
        );
};

export default Buttons;