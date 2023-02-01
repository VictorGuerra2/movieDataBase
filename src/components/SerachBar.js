import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {apiUrlSearch } from '../Globals/globalVariables';
import { useDispatch } from "react-redux";
import { updateSearchResult, updateSearchValue } from '../features/movieSearchSlice'

function SearchBar() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = searchParams.get('q');

    async function getMovieData(url) {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }

    function handleSubmit(event) {

        event.preventDefault();

        if (!search) {
            return;
        }
        navigate(`/search?q=${search}`);

        dispatch(updateSearchResult(movies));

        dispatch(updateSearchValue(search));

        setSearch('');
    }

    useEffect(() => {
        const resultUrl = `${apiUrlSearch}&query=${query}`;
        getMovieData(resultUrl).then(r => r);
    }, [query]);
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    );
}
export default SearchBar;