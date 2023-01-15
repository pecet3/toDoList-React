import { useDispatch, useSelector } from "react-redux";
import { toAuthor, toTasks } from "../routes";
import { selectDarkTheme, toggleDarkTheme } from "./themeButtonSlice";
import {
    Li,
    Nav,
    StyledNavLink,
    Ul,
    Button
} from "./styled";


export const Navigation = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);
    return (
        <Nav>
            <Ul>
                <Li>
                    <StyledNavLink to={toTasks()}>
                        Zadania
                    </StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toAuthor()}>
                        Autor
                    </StyledNavLink>
                </Li>
                <Li>
                    <Button
                        onClick={() => dispatch(toggleDarkTheme())}>
                        {darkTheme ?
                            "🌞 tryb jasny" :
                            "🌙 tryb ciemny"}
                    </Button>
                </Li>
            </Ul>
        </Nav>
    )
};

