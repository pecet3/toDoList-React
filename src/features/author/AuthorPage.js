import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

const AuthorPage = () => (
    <Container>
        <Header
            title="O autorze"
        />
        <Section
            title="Jakub Pacewicz"
            body={
                <>
                    <p>Hej, nazywam się <b>Jakub Pacewicz</b>, mam 22 lata i pochodzę ze Szczytna.
                        Pracuję w firmię Telus International, gdzie zajmuję się obsługą klienta.
                        Po pracy gram na gitarze elektrycznej oraz <strong>uczę się frontendu!</strong>
                        Czasem układam kostki rubika oraz inne łamigówki, gdyż kiedyś bardzo mnie to interesowało.</p>
                </>
            }
        />
    </Container>
);

export default AuthorPage;
