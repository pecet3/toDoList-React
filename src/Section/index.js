import "./style.css";
import { Container, HeaderContainer, Header, Content } from "./styled.js"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"

const Section = ({ title, body, extra, buttons }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <HeaderContainer buttons={buttons}>
        <Header >{title}</Header>
        {extra}
      </HeaderContainer>
      <Content>
        {body}
      </Content>
    </Container>
  </ThemeProvider>
);

export default Section;