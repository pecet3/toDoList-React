import { Container, HeaderContainer, Header, Content } from "./styled.js"

const Section = ({ title, body, extra, buttons }) => (
    <Container>
      <HeaderContainer buttons={buttons}>
        <Header >{title}</Header>
        {extra}
      </HeaderContainer>
      <Content>
        {body}
      </Content>
    </Container>
);

export default Section;