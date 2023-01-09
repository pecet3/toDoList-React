import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation } from "./Navigation";


const App = () => {
    return (
        <HashRouter>
            <Navigation />
                <Switch>
                    <Route path="/zadania/:id">
                        <TaskPage />
                    </Route>
                    <Route path="/zadania">
                        <TasksPage />
                    </Route>
                    <Route path="/autor">
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