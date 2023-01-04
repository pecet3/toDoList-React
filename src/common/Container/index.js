import { Wrapper } from "./styled";

const Container = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);

export default Container;