import { Li, Nav, StyledNavLink, Ul } from "./styled";

export const Navigation = () => (
    <Nav>
    <Ul>
        <Li>
            <StyledNavLink to="/zadania">
                Zadania
            </StyledNavLink>
        </Li>
        <Li>
            <StyledNavLink to="/autor">
                Autor
            </StyledNavLink>
        </Li>
    </Ul>
    </Nav>
);

