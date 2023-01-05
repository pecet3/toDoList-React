import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/zadania">
                            Zadania
                        </Link>
                    </li>
                    <li>
                        <Link to="/autor">
                            Autor
                        </Link>
                    </li>
                </ul>
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
            </nav>
        </HashRouter>
    )
};

export default App;