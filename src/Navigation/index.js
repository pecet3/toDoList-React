import { useDispatch, useSelector } from "react-redux";
import { toAuthor, toTasks } from "../routes";
import { selectDarkTheme, toggleDarkTheme } from "./themeButtonSlice";
import {
    Li,
    Nav,
    StyledNavLink,
    Ul,
    Button,
    ButtonBackground
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
                    <ButtonBackground
                        darkTheme={darkTheme}>
                        <Button
                            onClick={() => dispatch(toggleDarkTheme())}
                            darkTheme={darkTheme}>
                            {darkTheme ?
                                "🌙" :
                                "🌞"}
                        </Button>
                    </ButtonBackground>

                </Li>
            </Ul>
        </Nav>
    )
};



