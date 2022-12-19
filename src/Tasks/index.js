import {List, Element, Button, Content} from "./styled.js"
import {theme} from "../theme.js";
import {ThemeProvider} from "styled-components"



const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    return (
    <ThemeProvider theme={theme}>
    <List>
        {tasks.map((task) =>
            <Element
                hidden= {task.done && hideDone}
                key={task.id}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done && "✔"}
                </Button>
                <Content
                    done = {task.done}
                >
                    {task.content}
                </Content>
                <Button
                    toggleRemove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Element>
        )}
    </List>
    </ThemeProvider>
    
    )};

export default Tasks