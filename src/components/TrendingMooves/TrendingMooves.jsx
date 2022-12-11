
import css from './TrendingMooves.module.css';
import { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import { getTrending } from 'service/api';
import Loader from 'components/Loader/Loader';

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

    return (
        <>
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
            
        </>
    );
};

export default TrendingMooves;