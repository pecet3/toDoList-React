import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation } from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";


const App = () => {
    return (
        <HashRouter>
            <Navigation />
                <Switch>
                    <Route path={toTask()}>
                        <TaskPage />
                    </Route>
                    <Route path={toTasks()}>
                        <TasksPage />
                    </Route>
                    <Route path={toAuthor()}>
                        <AuthorPage />
                    </Route>
                    <Route path="/">
                        <Redirect to="/zadania" />
                    </Route>
                </Switch>
        </HashRouter>
    )
};

export default App;