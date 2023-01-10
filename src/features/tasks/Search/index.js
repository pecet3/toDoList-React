
import { Input } from "../Input";
import { useQueryParameter, useReplacementQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplacementQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        })
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