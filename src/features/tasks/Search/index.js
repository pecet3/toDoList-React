import { useLocation, useHistory } from "react-router-dom";
import { Input } from "../Input";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const onInputChange = ({target}) => {
        if(target.value.trim() === ""){
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    return (
        <Input
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
            search="true"
        />
    )
};

export default Search;