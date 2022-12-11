// import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getSearchQuery } from 'service/api';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';
// import MovieDetails from 'components/MovieDetails/MovieDetails';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const onChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const submit = e => {
        e.preventDefault();
        
        setSearchParams({ query: query });
        setQuery('');
    };

    const movieSearch = searchParams.get('query');

    useEffect(() => {
        if (!movieSearch) return;
        setLoading(true);
        async function renderMovies() {
            try {
                setMovies(await getSearchQuery(movieSearch));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        renderMovies();
    }, [movieSearch]);
    
    return (
        <div className={css.list}>
            <form onSubmit={submit}>
                <input type="text" value={query} onChange={onChange}/>
                <button type="submit">Search</button>
            </form>
            {loading && <Loader />}
            {movies && (
                <ul className={css.movies}>
                    {movies.map(({ id, title }) => (
                        <li key={id} className={css.item} >
                            <Link className={css.link}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movies;