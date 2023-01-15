import { Container, HeaderContainer, Header, Content } from "./styled.js"
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../Navigation/themeButtonSlice.js";

const Section = ({ title, body, extra, buttons, displayNone }) => {
  const darkTheme = useSelector(selectDarkTheme);
  return (
    <Container darkTheme={darkTheme}>
      <HeaderContainer buttons={buttons}>
        <Header >{title}</Header>
        {extra}
      </HeaderContainer>
      <Content displayNone={displayNone}>
        {body}
      </Content>
    </Container>
  );
}

export default Section;