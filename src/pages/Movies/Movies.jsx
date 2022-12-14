// import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation  } from 'react-router-dom';
import { getSearchQuery } from 'service/api';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';

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
    
    const location = useLocation();

    return (
        <div className={css.list}>
            <form onSubmit={submit}>
                <input className={css.input} type="text" value={query} onChange={onChange}/>
                <button className={css.button} type="submit">Search</button>
            </form>
            {loading && <Loader />}
            {movies.length ===0 && <h2>No movies found for your search query</h2> }
            {movies && (
                <ul className={css.movies}>
                    {movies.map(({ id, title }) => (
                        <li key={id} className={css.item} >
                            <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movies;