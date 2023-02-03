import { toAuthor, toTasks } from "../routes";
import {
    Li,
    Nav,
    StyledNavLink,
    Ul,
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";



export const Navigation = () => {
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
                    <ThemeSwitch />
                </Li>
            </Ul>
        </Nav>
    )
};



