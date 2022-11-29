import "./style.css"

const Form  = () => (
    <form className="form">
    <input className="form__input" placeholder="Co jest do zrobienia?" autofocus />
    <button className="js-button form__button">Dodaj zadanie</button>
  </form>
);

export default Form;