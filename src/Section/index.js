import "./style.css";

const Section = ({title, body, extra, extraClass}) => (
    <section className="section">
          <div className={`section__header ${extraClass}`}>
            <h2 className="section__headerText">{title}</h2>
            {extra}
          </div>
          <div className="section__body">
            {body}
          </div>
        </section>
);

export default Section;