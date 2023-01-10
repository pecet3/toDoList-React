import { toAuthor, toTasks } from "../routes";
import { Li, Nav, StyledNavLink, Ul } from "./styled";

export const Navigation = () => (
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
    </Ul>
    </Nav>
);

