import { Container, HeaderContainer, Header, Content } from "./styled.js"

const Section = ({ title, body, extra, buttons, displayNone }) => (
    <Container>
      <HeaderContainer buttons={buttons}>
        <Header >{title}</Header>
        {extra}
      </HeaderContainer>
      <Content displayNone={displayNone}>
        {body}
      </Content>
    </Container>
);

export default Section;