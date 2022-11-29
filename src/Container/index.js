import "./style.css";

const Container = (props) => (
    <main className="container">
        {props.children}
    </main>
);

export default Container;