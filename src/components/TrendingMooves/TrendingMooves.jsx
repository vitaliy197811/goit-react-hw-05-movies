import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'service/api';
import Loader from 'components/Loader/Loader';
import css from './TrendingMooves.module.css';

const TrendingMooves = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const renderMovies = async () => {
            setLoading(true);
            try {
                setMovies(await getTrending());
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        renderMovies();
    }, []);

    const location = useLocation();

    return (
        <>
            {loading && <Loader />}
            {movies && (
                <ul className={css.movies}>
                    {movies.map(({ id, title }) => (
                        <li key={id} className={css.item} >
                            <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            
        </>
    );
};

export default TrendingMooves;