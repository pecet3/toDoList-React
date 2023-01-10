import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { About } from "./About";

const AuthorPage = () => (
    <Container>
        <Header
            title="O autorze"
        />
        <Section
            title="Jakub Pacewicz"
            body={<About/>}
        />
    </Container>
);

export default AuthorPage;
