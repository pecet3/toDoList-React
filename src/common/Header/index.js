import {StyledHeader} from "./styled.js"


const Header = ({ title }) => (
    <StyledHeader className="header">
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header;