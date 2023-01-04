import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

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
                    <Route path="/zadania">
                        <Tasks />
                    </Route>
                    <Route path="/autor">
                        <Author />
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